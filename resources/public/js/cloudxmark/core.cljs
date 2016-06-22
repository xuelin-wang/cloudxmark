(ns cloudxmark.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def wiki-url
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")


(defn jsonp
  ([uri] (jsonp (chan) uri))
  ([c uri]
   (let [gjsonp (Jsonp. (Uri. uri))]
     (println (str "before send " uri))
     (.send gjsonp nil #(put! c %) #(println (str "error!" %)))
          c)))

(defmulti read om/dispatch)

(defmethod read :wiki/lst
  [{:keys [state ast] :as env} k {:keys [query]}]
  (merge
   {:value (get @state k [])}
   (when-not (or (string/blank? query)
                 (< (count query) 3))
     {:wiki-search ast})
   )
  )

(defmethod read :lst/lst
  [{:keys [state ast] :as env} _ {:keys [query]}]
  (let [curr-list (get @state :lst/lst) curr-ver (get @state :lst/lst-ver)]
  (if (or (> query curr-ver) (nil? curr-list))
    (do
      (println (str "query lists:"  (nil? curr-list)))
      {:lst-search ast}
      )
    (do
      (println (str "no query, lst: " curr-list ", ver:" curr-ver))
      {:value curr-list}
      )
    )
      )
  )

(defmethod read :lst/curr
  [{:keys [state ast] :as env} _ _]
   {:value (get @state :list/curr [])}
  )

(defmethod read :lst/user-id
  [{:keys [state ast] :as env} _ _]
   {:value (get @state :lst/user-id nil)}
  )

(defmethod read :lst/lst-ver
  [{:keys [state ast] :as env} k _]
   {:value (get @state k [])}
  )

(defmulti mutate om/dispatch)

(defmethod mutate 'lst/logout
  [{:keys [state] :as env} _ _ ]
  {:action (fn []
             (swap! state update-in [:lst/lst] (constantly []) )
             (swap! state update-in [:lst/user-id] (constantly nil) )
             )
   }
  )

(defmethod mutate 'lst/set-curr
  [{:keys [state] :as env} _ {:keys [lst/curr]}]
  {:action (fn []
             (do
               (swap! state update-in [:lst/curr] (constantly curr))
               (println (str "set to " curr))
             ))
   }
  )

(defmethod mutate 'lst/set-lst
  [{:keys [state] :as env} _ data-map]
  {:action (fn []
                 (println (str "data-map:" data-map))
               (swap! state update-in [:lst/lst] (constantly (get data-map "lst" [])))
               (swap! state update-in [:lst/user-id] (constantly (get data-map "user_id" nil)))
               (swap! state update-in [:lst/lst-ver] inc)
     )
   }
  )

(def app-state
  (atom {
         :wiki/lst []
         :lst/lst nil
         :lst/lst-ver 0
         :lst/curr 0
         :lst/user-id nil
         })
  )

(def send-chan (chan))

(defn result-list [results]
  (dom/ul #js {:key "result-list"}
          (map-indexed (fn [idx itm] (dom/li #js {:key idx} itm)) results)))

(defn refresh-lists-button [comp lst-ver]
  (dom/button #js {:type "button" :key "refreshPwButton"
                   :onClick (fn [e] (om/set-query! comp {:params {:lst-query (inc lst-ver)}}))
                   }
              (dom/span nil "Refresh List") )
  )

(defn add-list-button [comp]
  (dom/button #js {:type "button" :key "addListButton"
                   :onClick (fn [e] nil)
                   }
              (dom/span nil "Add List")
              )
  )

(defn list-select-field [comp idx curr-idx]
  (let [
        ]
  (dom/input
   #js {:key (str "lst-list-check-" idx)
        :type "radio"
        :checked (= idx curr-idx)
        :onChange
        (fn [e]
          (if (.. e -target -checked)
            (om/transact! comp `[(lst/set-curr {:lst/curr ~idx})])
            (println (str "unchecked: " idx))
          )
          )
        })))

(defn list-edit-area [comp idx curr-idx lsts]
  (let [items (get (nth lsts curr-idx) "items")
        ]
    (dom/div #js {}
             )
    (dom/div #js {:key (str "list-edit-area-" idx)}
             (map-indexed (fn [idx itm]
                            (dom/div #js {:key (str "itm-" idx)}
                                     (str (get itm "name") ": " )
                                     (dom/input #js {:value (get itm "value")})
                                     )
                                      )
                 items)
             )
    )
  )

(defn list-add-area [comp]
  (let []
    (dom/div #js {:key (str "list-edit-area-" -1)}
             "List name: "
             (dom/input nil)
             (add-list-button comp)
             )
    )
  )

(defn lst-list [comp results curr-idx]
  (dom/div #js {:key "lst-list"}
           (map-indexed (fn [idx itm] (dom/div #js {:key (str lst-list idx)}
                                               (list-select-field comp idx curr-idx)
                                               (dom/span #js {:key (str lst-list idx "span")} (itm "name" "?"))
                                               (if (= idx curr-idx) (list-edit-area comp idx curr-idx results) )
                                               )) results)
           (dom/h3 nil "Add new list:")
           (list-add-area comp)
           ))

(defn search-field [comp query type]
  (let [[elem-key query-key]
        (case type :wiki ["wiki-search-field" :wiki-query] :lst ["lst-search-field" :lst-query])
        ]
    (println (str "elem-key" elem-key " query-key:" query-key))
  (dom/input
   #js {:key elem-key
        :value query
        :onChange
        (fn [e]
          (om/set-query! comp
                         {:params {query-key (.. e -target -value)}}))})))

(defn logout-button [comp]
  (dom/button #js {:type "button"
                   :onClick
                   (fn [e]
            (om/transact! comp `[(lst/logout)])
                     )
                   } "Log out")
  )

(defn login-button [comp]
  (dom/button #js {:type "button"
                   :onClick
                   (fn [e]
            (om/transact! comp `[(lst/logout)])
                     )
                   } "Login")
  )

(defui Lsts
  static om/IQueryParams
  (params [_]
          {:lst-query 1})
  static om/IQuery
  (query [_]
         '[:lst/user-id :lst/curr :lst/lst-ver (:lst/lst {:query ?lst-query})])
  Object
  (render [this]
          (let [{:keys [lst/user-id lst/lst lst/lst-ver lst/curr]} (om/props this)]
            (if (nil? user-id)
              (dom/div nil (dom/h3 nil "Please login")
                       "User id: " (dom/input nil) "Password: " (dom/input nil)
                       (login-button this)
                       )
              (dom/div nil
                       (logout-button this)
                     (dom/h2 nil "Lists")
                     (refresh-lists-button this lst-ver)
                     (if-not (empty? lst)
                       (lst-list this lst (if (nil? curr) 0 curr))))
              )
            )))

(defui AutoCompleter
  static om/IQueryParams
  (params [_]
          {:wiki-query ""})
  static om/IQuery
  (query [_]
         '[(:wiki/lst {:query ?wiki-query})])
  Object
  (render [this]
          (let [{:keys [wiki/lst]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil "AutoCompleter")

                     (cond->
                         [(search-field this (:wiki-query (om/get-params this)) :wiki)]
                                 (not (empty? lst)) (conj (result-list lst)))))))

(defn send-to-chan [c]
  (fn [{:keys [wiki-search lst-search]} cb]
    (cond
      wiki-search
      (let [{[wiki-search] :children} (om/query->ast wiki-search)
            query (get-in wiki-search [:params :query])]
        (put! c [query :wiki cb]))
      lst-search
      (let [{[lst-search] :children} (om/query->ast lst-search)
           query (get-in lst-search [:params :query])]
        (put! c [query :lst cb]))
      )
    ))



(def wiki-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan send-chan)
    :remotes [:remote :wiki-search]}))

(def lst-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan send-chan)
    :remotes [:lst-search]}))

(defn search-loop [c]
  (go
    (loop [[query type cb] (<! c)]
      (cond
        (= type :wiki)
          (let [
              [_ results] (<! (jsonp (str wiki-url query)))
              ]
              (cb {:wiki/lst results})
            )
        (= type :lst)
          (let [
                results (<! (jsonp "/getItems"))
                results-obj (js->clj results)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results-obj)])
          )
        :else
          nil
        )
       (recur (<! c)))
    ))


(search-loop send-chan)

(om/add-root! wiki-reconciler AutoCompleter
              (gdom/getElement "wiki"))

(om/add-root! lst-reconciler Lsts
              (gdom/getElement "lsts"))
