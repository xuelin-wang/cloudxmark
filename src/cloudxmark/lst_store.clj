(ns cloudxmark.lst-store
    (:require
      [clojure.java.jdbc :as sql]
      [clojure.string :as str]
      ))

(def store-uri (or (System/getenv "DATABASE_URL") "postgresql://localhost:5432/lst"))

(defn- create-schema-lst []
      (sql/db-do-commands store-uri
                          (sql/create-table-ddl :lst
                                                [[:lst_id "int" "NOT NULL"]
                                                [:owner "varchar(64)" "NOT NULL"]
                                                [:name "varchar(1024)" "NOT NULL"]
                                                [:description "varchar(4096)"]
                                                [:labels "varchar(1024)"]
                                                [:constraint " PK_lst PRIMARY KEY(lst_id) "]
                                                [:constraint " UK_lst unique(owner, name) "]
                                                ]
                                                ))
      )

(defn- create-schema-item []
      (sql/db-do-commands store-uri
                          (sql/create-table-ddl :item
                                                [[:lst_id "int" "NOT NULL"]
                                                [:name "varchar(1024)" "NOT NULL"]
                                                [:value "varchar(4096)"]
                                                [:labels "varchar(1024)"]
                                                [:constraint " PK_item PRIMARY KEY(lst_id, name) "]
                                                ]
                                                ))
      )

(defn- drop-schema-lst []
       (sql/db-do-commands store-uri
                           (sql/drop-table-ddl :lst
                                                 ))
       )

(defn- create-schema-auth []
       (sql/db-do-commands store-uri
                           (sql/create-table-ddl :auth [ [:id "varchar(64)" "NOT NULL" "PRIMARY KEY"]
                                                 [:password "varchar(512)" "NOT NULL"]
                                                 [:description "varchar(4096)" "NOT NULL"]]
                                                 ))
       )

(defn- drop-schema-auth []
       (sql/db-do-commands store-uri
                           (sql/drop-table-ddl :auth
                                               ))
       )

(defn find-lsts [owner name]
  (let [select-cols "lst_id, owner, name, description, labels "]
    (if (nil? name)
        (sql/query store-uri [(str "SELECT " select-cols "FROM lst WHERE owner = ?") owner])
        (sql/query store-uri [(str "SELECT " select-cols "FROM lst WHERE owner = ? AND name = ? ") owner name])
        )
    )
  )

(defn find-items [owner name]
  (let [select-cols "l.lst_id AS lst_id, l.owner AS lst_owner, l.name AS lst_name, l.description AS lst_discription, l.labels AS lst_labels, i.name AS name, i.value AS value, i.labels AS labels "]
    (if (nil? name)
        (sql/query store-uri [(str "SELECT " select-cols " FROM lst l, item i WHERE l.lst_id = i.lst_id AND l.owner = ?") owner])
        (sql/query store-uri [(str "SELECT " select-cols " FROM lst l, item i WHERE l.lst_id = i.lst_id AND l.owner = ? AND l.name = ? ")
                              owner name])
        )
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


(defn hasLstTable? []
      (-> (sql/query store-uri
                     [(str "select count(*) from information_schema.tables "
                           "where table_name='lst'")])
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
      (when (not (hasLstTable?))
            (create-schema-lst)
            (create-schema-item)
            (println " done")))

(defn drop-tables []
      (when hasAuthTable?
            (drop-schema-auth)
            (println " done"))
      (when hasLstTable?
            (drop-schema-lst)
            (println " done")))

(defn drop-table [table]
       (sql/db-do-commands store-uri
                           (sql/drop-table-ddl (keyword table)
                                                 ))
)

(defn- to-labels [labels-str]
      (str/split labels-str #",")
      )

(defn find-by-labels [labels allOrAny owner]
  (let [all
        (sql/query store-uri ["SELECT * FROM lst WHERE owner = ?" owner])
        ]
       (cond
         (nil? labels) all
         allOrAny (let [check-all (fn [lst]
                                      (let [the-labels (to-labels lst)]
                                           (not
                                             (some (fn [label] (not (contains? the-labels label))) labels)
                                             )
                                           )
                                      )
                        ]
                       (filter check-all all)
                       )
         :else (let [check-any (fn [lst]
                                      (let [the-labels (to-labels lst)]
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


(defn add-lst [lst]
  (let [cmd-result (sql/db-do-commands store-uri
                                   (str "INSERT INTO lst (lst_id, owner, name, description, labels) SELECT MAX(list_id + 1),'"
                                        (:owner lst) "','" (:name lst) "','" (get lst :description "NULL") "','"
                                        (get lst :labels "NULL") "' FROM lst"
                                        ))
        ]
    (first cmd-result)
    )
  )

(defn delete-lst [name owner]
      (if name
        (sql/delete! store-uri :lst ["name = ? AND owner = ?" name owner])
        )
      )

(defn update-lst [from to]
      (cond
        (nil? from) (add-lst to)
        (nil? to) (delete-lst (:name from) (:owner from))
        :else
        (do
          (if (not= (:name from) (:name to))
            (delete-lst (:name from) (:owner from))
            )
          (let [lsts (find-lsts (:owner to) (:name to))]
               (if (first lsts)
                 (sql/update! store-uri :lst to ["name = ? AND owner = ?" (:name to) (:owner to)])
                 (add-lst to)
                 )
               )
          ))
      )
