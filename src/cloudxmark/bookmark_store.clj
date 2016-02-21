(ns cloudxmark.bookmark-store
    (:require
      [clojure.java.jdbc :as sql]
      [clojure.string :as str]
      ))

(def store-uri (or (System/getenv "BOOKMARK_STORE_URI") "postgresql://localhost:5432/bookmark"))

(defn create-schema []
      (sql/db-do-commands store-uri
                          (sql/create-table-ddl :bookmark [:folder "varchar(1024)"]
                                                [:link "varchar(4096)" :primary :key]
                                                [:description "varchar(4096)"]
                                                [:labels "varchar(1024)"]))
      )

(defn find-by-link [link]
      (if (nil? link)
        (sql/query store-uri ["SELECT * FROM bookmark"])
        (sql/query store-uri ["SELECT * FROM bookmark WHERE link = ?" link])
        )
      )

(defn- to-labels [labels-str]
      (str/split labels-str #",")
      )

(defn find-by-labels [labels allOrAny]
  (let [all
        (sql/query store-uri ["SELECT * FROM bookmark"])
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



(defn add-bookmark [bookmark]
      (if bookmark
        (sql/insert! store-uri :bookmark bookmark)
        )
      )

(defn delete-bookmark [link]
      (if link
        (sql/delete! store-uri :bookmark ["link = ?" link])
        )
      )

(defn update-bookmark [from to]
      (cond
        (nil? from) (add-bookmark to)
        (nil? to) (delete-bookmark (from :link))
        :else
        (do
          (if (not= (from :link) (to :link))
            (delete-bookmark (from :link))
            )
          (let [bookmarks (find-by-link (to :link))]
               (if (first bookmarks)
                 (sql/update! store-uri :bookmark to ["link = ?" (to :link)])
                 (add-bookmark to)
                 )
               )
          )
        )
      )