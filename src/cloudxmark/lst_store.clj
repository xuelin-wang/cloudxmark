(ns cloudxmark.lst-store
    (:require
      [clojure.java.jdbc :as sql]
      [clojure.string :as str]
      [cloudxmark.common.lst-common :as lst-common]
      [cloudxmark.common.ql :as ql]
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

(defn query-lst [owner query]
  (let [
        {:keys [selects where params vars entity-alias-map] :as parsed-query}
          (ql/parse-query query {:vars {"lst_owner" owner}})
        [sql sql-params] (ql/parsed-query->sql-params parsed-query)
        results (sql/query store-uri (into [] (cons sql sql-params)))
        ]
    results
    )
  )

(defn get-pass [id]
  (let [query {:entity :auth :alias "a"
               :args [[:= :id id]]
               :attributes [:password]
               }
        ]
    (query-lst nil query)
    )
  (comment
(let [
            results (sql/query store-uri ["SELECT password FROM auth WHERE id = ?" id])
            ]
           (:password (first results))
           )
    )
      )

(defn find-lsts [owner lst-name]
  (let [query {:entity :lst  :alias "l"
               :args (if (nil? lst-name)
                      [[:= :owner :$lst_owner]]
                      [[:= :owner :$lst_owner] [:= :name :$lst_name]]
                      )
               :vars (if (nil? lst-name) {} {"lst_name" lst-name})
               :attributes [:lst-id :owner :name :description :labels]
               }
        ]
    (query-lst owner query)
    )

  (comment
  (let [select-cols "lst_id, owner, name, description, labels "]
    (if (nil? name)
        (sql/query store-uri [(str "SELECT " select-cols "FROM lst WHERE owner = ?") owner])
        (sql/query store-uri [(str "SELECT " select-cols "FROM lst WHERE owner = ? AND name = ? ") owner name])
        )
    )
    )

  )

(defn find-items [owner lst-name]
  (let [
        query
             {:entity :lst
              :alias "l"
              :args (if (nil? lst-name)
                      [[:= :owner :$lst_owner]]
                      [[:= :owner :$lst_owner] [:= :name :$lst_name]]
                      )
              :vars (if (nil? lst-name) {} {"lst_name" lst-name})
              :attributes [
                           :lst-id :owner :name :description :labels
                           {:entity :item :alias "i"
                            :args [[:= :l.lst_id :i.lst_id]] :attributes [:name :value :labels]}]
              }
        ]
        (query-lst owner query)
    )


  (comment
  (let [select-cols "l.lst_id AS lst_id, l.owner AS lst_owner, l.name AS lst_name, l.description AS lst_discription, l.labels AS lst_labels, i.name AS name, i.value AS value, i.labels AS labels "]
    (if (nil? lst-name)
        (sql/query store-uri [(str "SELECT " select-cols " FROM lst l LEFT OUTER JOIN item i ON l.lst_id = i.lst_id  WHERE l.owner = ?") owner])
        (sql/query store-uri [(str "SELECT " select-cols " FROM lst l LEFT OUTER JOIN  item i ON l.lst_id = i.lst_id  WHERE l.owner = ? AND l.name = ? ")
                              owner lst-name])
        )
    )
    )

  )



(defn no-auth? []
  (let [
        query
             {:entity :auth
              :alias "a"
              :args []
              :vars {}
              :attributes [[:count]]
              }
        results (query-lst nil query)
            [_ cnt] (first (first results))
        ]
    (zero? cnt)
    )
  (comment
      (let [
            results (sql/query store-uri ["SELECT count(*) AS cnt FROM auth"])

            ]
           (zero? (:cnt (first results)))
           )
    )
      )

(defn no-lst? []
  (let [query {:entity :lst :alias "l" :args [] :vars {} :attributes [[:count]]}
        results (query-lst nil query)
        [_ cnt] (first (first results))
        ]
    (zero? cnt)
    )
      )


(defn has-table? [table-name]
  (let [
      query {:entity :information_schema.tables :alias "tbls" :args [[:= :table_name table-name]]
             :attributes [[:count]]
             }
      results (query-lst nil query)
      [_ cnt] (first (first results))
        ]
  (pos? cnt)
      )
)

(defn has-lst-table? []
  (has-table? "lst")
  )

(defn has-auth-table? []
  (has-table? "auth")
)

(defn migrate []
      (when (not (has-auth-table?))
            (create-schema-auth)
            (println " done"))
      (when (not (has-lst-table?))
            (create-schema-lst)
            (create-schema-item)
            (println " done")))

(defn drop-tables []
      (when has-auth-table?
            (drop-schema-auth)
            (println " done"))
      (when has-lst-table?
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


(defn add-lst [{:keys [owner name description labels] :as lst}]
  (let
      [
       sql-str0 "INSERT INTO lst (lst_id, owner, name, description, labels) "
       sql-str1 (str ",'" owner "','" name "','" (or description "") "','"
                                        (or labels "") "' " )
       sql-str (if (no-lst?)
                 (str sql-str0 " VALUES (1" sql-str1 ")")
                 (str sql-str0 " SELECT MAX(lst_id + 1)" sql-str1 " FROM lst")
                 )

       cmd-result (sql/db-do-commands store-uri sql-str)
       ]
    (first cmd-result)
      )
  )

(defn check-add-settings-lst [owner]
  (if (-> (find-lsts owner lst-common/settings-lst-name) empty?)
    (add-lst {:owner owner :name lst-common/settings-lst-name :description "" :labels ""} )
    )
  (let [settings-lst (-> (find-lsts owner lst-common/settings-lst-name) first)
        settings-lst-id (get settings-lst "lst_id")
        ]
    ()
    )
  )

(defn update-lst [{:keys [lst-id name description labels] :as lst}]
  (assert lst-id "List id is required")
  (assert (not (clojure.string/blank? name)) "List name is required")
  (let [owner (-> (sql/query store-uri ["SELECT owner FROM lst WHERE list_id = ?" lst-id]) first)
        found-lsts (find-lsts owner name)]
    (    if (seq found-lsts)
      (assert (= lst-id (get (first found-lsts) "lst_id")) (str "Existing list with name " name " doesn't match " lst-id ))
      )
  (sql/update! store-uri :lst lst ["lst_id = ?" lst-id])
    )
        )

(defn add-item [item]
  (let
      [{:keys [lst-id name value labels]} item
       cmd-result (sql/insert! store-uri :item ["lst_id" "name" "value" "labels"] [lst-id name (or value "") (or labels "")]) ]
    (first cmd-result)
      )
  )


(defn update-item [lst-id orig-name col-name value]
  (let
      [
        name-conflict? (and (= col-name "name") (not= orig-name (str value))
                         (-> (sql/query store-uri [(str "SELECT count(*) FROM item WHERE lst_id = ? AND name = ?") lst-id value])
                             first :count pos?)
                         )
      ]

    (if name-conflict?
      0
      (let [
            sql-str (str "UPDATE item SET " col-name " = ? WHERE lst_id = ? AND name = ?")
       cmd-result (sql/execute! store-uri [sql-str value lst-id orig-name])
            ]
    (first cmd-result)
        )
      )
      )
  )

(defn delete-lst [name owner]
      (if name
        (sql/delete! store-uri :lst ["name = ? AND owner = ?" name owner])
        )
      )
