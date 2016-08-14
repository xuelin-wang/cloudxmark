(ns cloudxmark.common.ql
  (:require

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
          (let [dot-index (.indexOf name ".")
                [this-entity this-select]
                (if (< dot-index 0)
                  [(unkebab entity) name]
                  [(.substring name 0 dot-index) (.substring name (inc dot-index))])]
             {:selects [:-attr (or (get alias-map this-entity) this-entity) this-select] :params []}
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

(defn parse-query [{:keys [entity alias args attributes] :as query}
                   {:keys [selects where params vars entity-alias-map] :as parsed}]
  (let [
        this-alias (or alias entity)
        new-entity-alias-map (merge (or entity-alias-map {}) {entity this-alias})

        new-where (reduce
                     (fn [{:keys [selects params] :as curr-parsed} arg]
                       (let [parsed-arg (parse-exp arg vars entity new-entity-alias-map)]
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
                    :entity-alias-map new-entity-alias-map})
     attributes
     )
    )
  )

(defn parsed-exp->sql [exp]
  (match [exp]
         [[:-attr :?]] "?"
         [[:-attr alias col]] (str alias "." col)
         [[:between sel1 sel2 sel3]] (str (parsed-exp->sql sel1) " BETWEEN " (parsed-exp->sql sel2) " AND " (parsed-exp->sql sel3))
         [[op sel1 sel2]] (if (#{:> :>= :< :<= :=} op)
                             (str (parsed-exp->sql sel1) " " (name op) " " (parsed-exp->sql sel2))
                             (throw-common (str "Unsupported binary operator: " op))
                             )
         [[op sel]] (case op
                       :pos? (str (parsed-exp->sql sel) " > 0")
                       :not-pos? (str (parsed-exp->sql sel) " <= 0")
                       :neg? (str (parsed-exp->sql sel) " < 0")
                       :not-neg? (str (parsed-exp->sql sel) " >= 0")
                       (throw-common (str "Unsupported unary operator: " op))
                       )
         )
  )

(defn parsed-query->sql [{:keys [selects params where vars entity-alias-map] :as parsed-query}]
  (let [sel-str (clojure.string/join ", " (map parsed-exp->sql selects))

        where-sel-str (if (seq (:selects where)) (clojure.string/join " AND " (map parsed-exp->sql (:selects where))))
        from-str (clojure.string/join ", " (map (fn [[k v :as e]] (str (unkebab k) " " (unkebab v)))
                      entity-alias-map))
        ]
    (str "SELECT " sel-str " FROM " from-str (if-not (nil? where-sel-str) (str " WHERE " where-sel-str)))
   )
  )
