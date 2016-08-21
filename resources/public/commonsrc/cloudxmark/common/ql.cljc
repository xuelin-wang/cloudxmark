(ns cloudxmark.common.ql
  (:require
   [clojure.core.match :refer [match]] ;clojureOnly
   [cljs.core.match :refer-macros [match]] ;cljsOnly
   [cloudxmark.common.util :refer [throw-common]]
   )
  )

(def op-types [:query :mutation])

(defn kebab [kw-or-str]
  (let [this-str (if (keyword? kw-or-str) (name kw-or-str) kw-or-str)]
    (keyword (clojure.string/replace this-str "_" "-"))
    )
  )

(defn unkebab [kw-or-str]
  (let [this-str (if (keyword? kw-or-str) (name kw-or-str) kw-or-str)]
    (clojure.string/replace this-str "-" "_")
    )
  )

(defn parse-attr [select vars entity alias-map]
  (let [entity-alias (alias-map entity)
        ]
    (if
        (keyword? select)
      (let [name (unkebab (name select))            ]
        (if (.startsWith name "$")
          {:selects [:-attr :?] :params [(get vars (.substring name 1))]}

          (let [matched-entity-aliases
                (filter (fn [[k v]]
                          (let [prefix (str (unkebab v) ".")
                                ]
                            (.startsWith name prefix)
                            )) alias-map)

                [this-alias this-select]
                (if-not (seq matched-entity-aliases)
                  [entity-alias name]
                  (let [
                        [k v] (first matched-entity-aliases)
                        prefix (str (unkebab v) ".")
                        prefix-len (count prefix)
                        ]
                    [v (.substring name prefix-len)]
                    ))]
            {:selects [:-attr this-alias this-select] :params []}
            )
          )
        )

      {:selects [:-attr :?] :params [select]}
      )
    )
  )

(defn parse-exp [exp vars entity alias-map]
  (if-not (vector? exp)
    (parse-attr exp vars entity alias-map)

    (match [exp]
           [[attr]]
           (parse-exp attr vars entity alias-map)

           [[op attr]]
           (let [{:keys [selects params]} (parse-exp attr vars entity alias-map)
                 ]
             {:selects [op selects] :params params
              }
             )

           [[op attr1 attr2]]
           (let [{:keys [selects params]} (parse-exp attr1 vars entity alias-map)
                 res2 (parse-exp attr2 vars entity alias-map)
                 ]
             {:selects [op selects (:selects res2)] :params (into [] (concat params (:params res2)))
              }
             )

           [[op attr1 attr2 attr3]]
           (let [{:keys [selects params]} (parse-exp attr1 vars entity alias-map)
                 res2 (parse-exp attr2 vars entity alias-map)
                 res3 (parse-exp attr3 vars entity alias-map)
                 ]
             {:selects [op selects (:selects res2) (:selects res3)] :params (into [] (concat params (:params res2) (:params res3)))
              }
             )
           )
    )

  )

(def entity-names #{:lst :item :auth})

(defn- is-entity? [name]
  (entity-names name)
  )

(defn parse-query [{:keys [entity alias args  attributes] :as query}
                   {:keys [selects where params vars entity-alias-map] :as parsed}]
  (let [
        this-alias (or alias (unkebab entity))
        new-entity-alias-map (merge (or entity-alias-map {}) (if (nil? entity) {} {entity this-alias}))
        merged-vars (merge {} vars (:vars query))

        new-where (reduce
                   (fn [{:keys [selects params] :as curr-parsed} arg]
                     (let [parsed-arg (parse-exp arg merged-vars entity new-entity-alias-map)]
                       {:selects (apply merge selects [(:selects parsed-arg)] )
                        :params (apply merge params (:params parsed-arg))
                        }
                       )
                     )
                   {:selects (or (:selects where) []) :params (or (:params where) []) }
                   args
                   )
        ]

    (reduce
     (fn [{:keys [selects where params vars entity-alias-map] :as curr-parsed} attr]
       (if
           (map? attr)
         (if (is-entity? (:entity attr))
           (parse-query attr curr-parsed)
           (throw-common (str "attribute map's :entity is not an entity: " attr))
           )

         (let [parsed-attr (parse-exp attr vars entity entity-alias-map) ]
           (merge (or curr-parsed {}) {:selects (apply merge (or selects []) [(:selects parsed-attr)])
                                       :params (apply merge (or params []) (:params parsed-attr))
                                       })
           )
         )
       )
     (merge parsed {
                    :where new-where
                    :params (or params [])
                    :vars merged-vars
                    :entity-alias-map new-entity-alias-map})
     attributes
     )
    )
  )


(defn parsed-exp->sql [exp alias-to-ignore]
  (match [exp]
         [[:-attr :?]] "?"
         [[:-attr alias col]]
         (let [col-str (unkebab col)]
           (if (= alias alias-to-ignore) col-str (str alias "." col-str))
           )
         [[:count]] "COUNT(*)"
         [[:between sel1 sel2 sel3]] (str (parsed-exp->sql sel1 alias-to-ignore) " BETWEEN " (parsed-exp->sql sel2 alias-to-ignore) " AND " (parsed-exp->sql sel3 alias-to-ignore))
         [[op sel1 sel2]] (if (#{:> :>= :< :<= := :+ :- :* :/} op)
                            (str (parsed-exp->sql sel1 alias-to-ignore) " " (name op) " " (parsed-exp->sql sel2 alias-to-ignore))
                            (throw-common (str "Unsupported binary operator: " op))
                            )
         [[op sel]] (case op
                      :pos? (str (parsed-exp->sql sel alias-to-ignore) " > 0")
                      :not-pos? (str (parsed-exp->sql sel alias-to-ignore) " <= 0")
                      :neg? (str (parsed-exp->sql sel alias-to-ignore) " < 0")
                      :not-neg? (str (parsed-exp->sql sel alias-to-ignore) " >= 0")
                      :max (str "MAX(" (parsed-exp->sql sel alias-to-ignore) ")")
                      :min (str "MIN(" (parsed-exp->sql sel alias-to-ignore) ")")
                      :average (str "AVG(" (parsed-exp->sql sel alias-to-ignore) ")")
                      (throw-common (str "Unsupported unary operator: " op))
                      )
         )
  )



(defn parsed-ql->sql-params [op entity {:keys [selects params where vars entity-alias-map] :as parsed-query}]
  (let [parse-column-name-val (fn [exp]
                                (match [exp]
                                       [[:= col val]]
                                       [col val]
                                       )
                                )
        parse-columns-name-val (fn [exps]
                                 (apply map vector (into [] (map parse-column-name-val exps)))
                                 )
        ]
    (case op
          :query
          (let [
                sel-str (clojure.string/join ", " (map #(parsed-exp->sql % nil) selects))
                where-sel-str (if (seq (:selects where)) (clojure.string/join " AND " (map #(parsed-exp->sql % nil) (:selects where))))
                from-str (clojure.string/join ", " (map (fn [[k v :as e]] (str (unkebab k) " " (unkebab v)))
                                                        entity-alias-map))
                ]
            [
             (str "SELECT " sel-str " FROM " from-str (if-not (empty? where-sel-str) (str " WHERE " where-sel-str)))
             (concat (or params []) (or (:params where) []))
             ]
            )

          :insert
          (let [
                [cols vals] (parse-columns-name-val selects)
                vals-sql (map #(parsed-exp->sql % nil) vals)
                alias-to-ignore (get entity-alias-map entity)
                where-sel-str (if (seq (:selects where)) (clojure.string/join " AND " (map #(parsed-exp->sql % nil) (:selects where))) "")
                from-str (clojure.string/join ", " (map (fn [[k v :as e]] (str (unkebab k) " " (unkebab v)))
                                                        entity-alias-map))
                ]
            [

             (str "INSERT INTO " (unkebab entity) " (" (clojure.string/join ", " (map #(unkebab (parsed-exp->sql % alias-to-ignore)) cols)) ") "
                  (if (empty? where-sel-str)
                    (str "VALUES (" (clojure.string/join ", " vals-sql) ")")
                    (str "SELECT " (clojure.string/join ", " vals-sql) " FROM " from-str (str " WHERE " where-sel-str))
                    ))
             (into [] (concat (or params []) (or (:params where) [])))
             ]
            )

          :update
          (let [
                [cols vals] (parse-columns-name-val selects)
                vals-sql (map #(parsed-exp->sql % nil) vals)
                alias-to-ignore (get entity-alias-map entity)
                set-sql (clojure.string/join ", " (map #(str %1 " = " (parsed-exp->sql %2 alias-to-ignore)) cols vals))

                where-sel-str (if (seq (:selects where)) (clojure.string/join " AND " (map #(parsed-exp->sql % alias-to-ignore) (:selects where))))
                from-str (clojure.string/join ", " (map (fn [[k v :as e]] (str (unkebab k) " " (unkebab v)))
                                                        entity-alias-map))
                ]
            [
             (str "UPDATE " (unkebab entity) " SET " set-sql " FROM " from-str (if-not (nil? where-sel-str) (str " WHERE " where-sel-str)) )
             (concat (or params []) (or (:params where) []))
             ]
            )

          :delete

          (let [        alias-to-ignore (get entity-alias-map entity)
                where-sel-str (if (seq (:selects where)) (clojure.string/join " AND " (map #(parsed-exp->sql % alias-to-ignore) (:selects where))))
                from-str (clojure.string/join ", " (map (fn [[k v :as e]] (str (unkebab k) " " (unkebab v)))
                                                        entity-alias-map))
                ]
            [
             (str "DELETE FROM " (unkebab entity) (if-not (nil? where-sel-str) (str " WHERE " where-sel-str)) )
             (concat (or params []) (or (:params where) []))
             ]
            )

          (throw-common (str "Invalid operation: " op))
          )
    )
  )

(defn parsed-query->sql-params [parsed-query]
  (parsed-ql->sql-params :query nil parsed-query)
  )
