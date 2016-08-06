(ns cloudxmark.common.ql
  (:require [clojure.core.match :refer [match]]) ;clojureOnly

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
      (let [name (name select)
            ]
        (if (.startsWith name "$")
          {:selects [:?] :params [(get vars (.substring name 1))]}
          (let [dot-index (.indexOf name ".")
                [this-entity this-select]
                (if (< dot-index 0)
                  [entity name]
                  [(.substring name 0 dot-index) (.substring name (inc dot-index))])]
             {:selects [(or (get alias-map this-entity) this-entity) this-select] :params []}
            )
          )
        )

    {:selects [:?] :params [select]}
    )
    )
  )

(defn parse-where [where vars entity alias-map]
  (match [where]
         [[attr]]
         (let [{:keys [selects params]} (parse-attr attr vars entity alias-map)
               ]
           (println (str "opt1:" selects))
           {:selects [selects] :params params
            }
           )

         [[op attr]]
         (let [{:keys [selects params]} (parse-attr attr vars entity alias-map)
               ]
           (println (str "opt2:" selects))
           {:selects [op selects] :params params
            }
           )

         [[op attr1 attr2]]
         (let [{:keys [selects params]} (parse-attr attr1 vars entity alias-map)
               res2 (parse-attr attr2 vars entity alias-map)
               ]
           (println (str "opt3:" selects ",and: " (:selects res2)))
           {:selects [op selects (:selects res2)] :params (into [] (concat params (:params res2)))
            }
           )
         )
  )

(def db-aliases "abcdefghijklmnopqrstuvwxyz")

(defn- get-table-alias [index]
  (.substring db-aliases index (inc index))
  )

(def entity-names #{"lst" "item" "auth"})

(defn- is-entity? [name]
  (some? entity-names name)
  )

(defn parse-query [{:keys [entity args attributes] :as query}
                   {:keys [select from where params vars next-alias-index alias-map] :as parsed}]
  (let [
        table-alias (get-table-alias next-alias-index)
        new-from (str entity " " table-alias)
        new-alias-map (merge alias-map {entity table-alias})
        parsed-args (reduce
                     (fn [curr-parsed arg]
                       (let [parsed-arg (parse-where arg vars entity  new-alias-map)]
                         {:where (concat (:where curr-parsed) [(:sql parsed-arg)])
                          :params (concat (:params curr-parsed) (:params parsed-arg))
                          }
                         )
                       )
                     {:where [] :params []}
                     args
                     )
        ]
(reduce
     (fn [{:keys [select from where params vars next-alias-index alias-map] :as parsed}  attr]
     (cond
       (or (string? attr) (keyword? attr))
       (let [parsed-attr (parse-attr attr vars table-alias) ]
         (merge parsed {:select (concat select [(:sql parsed-attr)])
                        :params (concat (params (:params parsed-attr)))
                        })
         )

       (is-entity? (:entity attr))
       (parse-query attr parsed )

       :else
       (throw (str "Attribute is neither string nor entity: " attr))

       )
     )
     (merge parsed {:from (concat from [new-from])
                    :where (concat where (:where parsed-args))
                    :params (concat params (:params parsed-args))
                    :next-alias-index (inc next-alias-index)
                    :alias-map new-alias-map})
     attributes
     )
    )
  )
