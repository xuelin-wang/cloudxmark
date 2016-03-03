(ns cloudxmark.bookmark-store
    (:require
      [clojure.java.jdbc :as sql]
      [clojure.string :as str]
      ))

(def store-uri (or (System/getenv "DATABASE_URL") "postgresql://localhost:5432/bookmark"))

(defn- create-schema-bookmark []
      (sql/db-do-commands store-uri
                          (sql/create-table-ddl :bookmark
                                                [:owner "varchar(64)" "NOT NULL"]
                                                [:folder "varchar(1024)" "NOT NULL"]
                                                [:link "varchar(4096)" "NOT NULL"]
                                                [:description "varchar(4096)"]
                                                [:labels "varchar(1024)"]
                                                ["PRIMARY KEY" "(owner, link)"]
                                                ))
      )

(defn- create-schema-auth []
       (sql/db-do-commands store-uri
                           (sql/create-table-ddl :auth [:id "varchar(64)" "NOT NULL" "PRIMARY KEY"]
                                                 [:password "varchar(512)" "NOT NULL"]
                                                 [:description "varchar(4096)" "NOT NULL"]
                                                 ))
       )

(defn find-by-link [link owner]
      (if (nil? link)
        (sql/query store-uri ["SELECT * FROM bookmark WHERE owner = ?" owner])
        (sql/query store-uri ["SELECT * FROM bookmark WHERE link = ? AND owner = ?" link owner])
        )
      )

(defn get-pass [id]
      (let [
            results (sql/query store-uri ["SELECT password FROM auth WHERE id = ?" id])
            ]
           (:password (first results))
           )
      )

(defn no-auth? []
      (let [
            results (sql/query store-uri ["SELECT count(*) AS cnt FROM auth"])
            ]
           (zero? (:cnt (first results)))
           )
      )


(defn hasBookmarkTable? []
      (-> (sql/query store-uri
                     [(str "select count(*) from information_schema.tables "
                           "where table_name='bookmark'")])
          first :count pos?))

(defn hasAuthTable? []
      (-> (sql/query store-uri
                     [(str "select count(*) from information_schema.tables "
                           "where table_name='auth'")])
          first :count pos?))

(defn migrate []
      (when (not (hasAuthTable?))
            (create-schema-auth)
            (println " done"))
      (when (not (hasBookmarkTable?))
            (create-schema-bookmark)
            (println " done")))

(defn- to-labels [labels-str]
      (str/split labels-str #",")
      )

(defn find-by-labels [labels allOrAny owner]
  (let [all
        (sql/query store-uri ["SELECT * FROM bookmark WHERE owner = ?" owner])
        ]
       (cond
         (nil? labels) all
         allOrAny (let [check-all (fn [bookmark]
                                      (let [the-labels (to-labels bookmark)]
                                           (not
                                             (some (fn [label] (not (contains? the-labels label))) labels)
                                             )
                                           )
                                      )
                        ]
                       (filter check-all all)
                       )
         :else (let [check-any (fn [bookmark]
                                      (let [the-labels (to-labels bookmark)]
                                           (some (fn [label] (contains? the-labels label)) labels)
                                           )
                                      )
                        ]
                       (filter check-any all)
                       )
         ))
  )


(defn add-auth [auth]
      (if auth
        (sql/insert! store-uri :auth auth)
        )
      )


(defn add-bookmark [bookmark]
      (if bookmark
        (sql/insert! store-uri :bookmark bookmark)
        )
      )

(defn delete-bookmark [link owner]
      (if link
        (sql/delete! store-uri :bookmark ["link = ? AND owner = ?" link owner])
        )
      )

(defn update-bookmark [from to]
      (cond
        (nil? from) (add-bookmark to)
        (nil? to) (delete-bookmark (from :link) (:owner to))
        :else
        (do
          (if (not= (from :link) (to :link))
            (delete-bookmark (from :link) (from :owner))
            )
          (let [bookmarks (find-by-link (to :link) (to :owner))]
               (if (first bookmarks)
                 (sql/update! store-uri :bookmark to ["link = ? AND owner = ?" (to :link) (to :owner)])
                 (add-bookmark to)
                 )
               )
          ))
      )
