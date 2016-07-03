(ns cloudxmark.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [com.rpl.specter :as specter]
            [om.core :refer [set-state! get-state]]
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

(def event-chan (chan))

(defmulti read om/dispatch)

(defmethod read :wiki/lst
  [{:keys [state ast] :as env} _ {:keys [query]}]
  (merge
   {:value (get-in @state [:wiki :lst] [])}
   (when-not (or (string/blank? query)
                 (< (count query) 3))
     {:wiki-search ast})
   )
  )

(defmethod read :lst
  [{:keys [state ast] :as env} _ {:keys [query-ver query-user query-password]}]
  (let [lst (:lst @state)
        {:keys [lsts curr ver user-id status]} lst]
    (println (str "curruser:" user-id ",query ver:" query-ver ", ver:" ver ",query-user:" query-user ",query-pw:" query-password))
    (cond
      (= query-user :logout)
        (if (some? user-id) {:lst-search ast} {:value lst})

      (and (some? user-id) (or (> query-ver ver) (nil? lsts)))
      (do
        (println (str "remote query lists:"  (nil? lsts)))
      {:lst-search ast}
      )

      (and (nil? user-id) (some? query-user))
      (do
        (println (str "remote query lists ast:" ast ))
        {:lst-search ast}
        )

      :else
              {:value lst}

      )
          )
    )

(defmulti mutate om/dispatch)


(defmethod mutate 'lst/set-status
  [{:keys [state] :as env} _ {:keys [id] :as status}]
  {:action (fn []
             (println (str "state before setfield: " @state))
             (swap! state assoc-in [:lst :status id] status)
             (println (str "state after setfield: " @state))
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

(defmethod mutate 'lst/set-field-state
  [{:keys [state] :as env} _ data-map]
  {:action (fn []
             (let [{:keys [field-id value]} data-map]
               (swap! state assoc-in [:lst field-id] value)
                                      )
             )
   }
  )

(defmethod mutate 'lst/login
  [{:keys [state] :as env} _ data-map]
  {:action (fn []
             (println (str "data-map:" data-map))
             (let [{:keys [user-id password ver]} data-map]
             (println (str "state in login:" @state))
        (put! event-chan [:lst-login data-map nil]))
     )
   }
  )
(defmethod mutate 'lst/logout
  [{:keys [state] :as env} _ _]
  {:action (fn []
             (println (str "state in logout:" @state))
             (swap! state assoc :lst {:user-id nil :lsts nil :ver 0})
        (put! event-chan [:lst-logout {} nil]))
   }
  )


(defmethod mutate 'lst/set-lst
  [{:keys [state] :as env} _ data-map]
  {:action (fn []
             (println (str "data-map in set-lst:" data-map))
             (let [{:keys [status lsts user-id ver]} data-map
                   status-id (:id status)
                   ]

               (if (and status status-id)
                 (swap! state assoc-in [:lst :status status-id] status)
                 )
             (swap! state assoc :lst (merge (:lst @state) {:lsts lsts :ver ver :user-id user-id}))
             (println (str "state after setlist:" @state)))
     )
   }
  )


(defmethod mutate 'wiki/set-lst
  [{:keys [state] :as env} _ lst]
  {:action (fn []
             (println (str "before wiki update list:" lst))
             (swap! state assoc-in [:wiki :lst] (:lst lst))
             (println (str "state after wiki update:" @state))
     )
   }
  )

(def app-state
  (atom {
         :wiki {:lst []}
         :lst {
               :lsts nil
               :ver 0
               :curr 0
               :user-id nil
               }
         })
  )



(defn result-list [results]
  (dom/ul #js {:key "result-list"}
          (map-indexed (fn [idx itm] (dom/li #js {:key idx} itm)) results)))

(defn status-line [{:keys [info warn error]}]
  (println (str "info:" info ",warn:" warn ",error:" error))
  (let [[color msg]
        (cond
          error ["red" error]
          warn ["orange" warn]
          info ["black" info]
          )
        ]
  (dom/span (clj->js {:style {:color color}})
            msg)))

(defn refresh-lists-button [comp user-id lst-ver]
  (dom/button #js {:type "button" :key "refreshPwButton"
                   :onClick
                   (fn [e]
                     (if (nil? user-id)
                       (swap! app-state assoc-in [:lst :status :refresh-lists] {:error "Permission denied"})
                       (om/set-query! comp {:params {:query-ver (inc lst-ver)}})
                     )
                   )}
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

(defn lst-list [comp lsts curr-idx]
  (dom/div #js {:key "lst-list"}
           (map-indexed (fn [idx itm] (dom/div #js {:key (str lst-list idx)}
                                               (list-select-field comp idx curr-idx)
                                               (dom/span #js {:key (str lst-list idx "span")} (itm "name" "?"))
                                               (if (= idx curr-idx) (list-edit-area comp idx curr-idx lsts) )
                                               )) lsts)
           (dom/h3 nil "Add new list:")
           (list-add-area comp)
           ))

(defn search-field [comp query type]
  (let [[elem-key query-key]
        (case type :wiki ["wiki-search-field" :wiki-query] :lst ["lst-search-field" :ver])
        ]
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
                         (om/transact! comp `[(lst/logout {})])
                     )
                   } "Log out")
  )

(defn lst-field [comp field-id]
  (let [dontcare (println (str "comp props" (om/props comp)))
        field-state (get-in (om/props comp) [:lst field-id])
        dontcare2 (println (str "fieldstate for " field-id " is: " (get (om/props comp) field-id)))
        ]
  (dom/input #js {:key (str "lst-field-" field-id)
        :value (or field-state "")
        :onChange
                  (fn [e]
                    (let [value (.. e -target -value)]
                      (println (str "the field:" field-id ":" value))
                      (om/transact! comp `[(lst/set-field-state {:field-id ~field-id :value ~value})])
                         ))})))


(defn login-button [comp]
  (dom/button #js {:type "button"
                   :onClick
                   (fn [e]
                     (let [lst-map (:lst (om/props comp))
                           dontcare0 (println "lst-map" (om/props comp))


                           ver (:ver lst-map)
                           new-ver (inc ver)
                           user-id (:user-id-field lst-map)
                           password (:password-field lst-map)
                           error (cond
                                   (clojure.string/blank? user-id) "User name required"
                                   (clojure.string/blank? password) "Password required"
                                   :else nil)
                           dontcare (println "error is:" error)
                           ]
                       (if (clojure.string/blank? error)
                         (om/transact! comp `[(lst/login {:user-id ~user-id :password ~password :ver ~new-ver})])
                         (om/transact! comp `[(lst/set-status {:id :login :error ~error})])
                         )
                       (println (str "stateafterclick:" @app-state))
                       )
                     )
                   } "Login")
  )

(defui Lsts
  static om/IQueryParams
  (params [_]
          {:query-user nil :query-ver 0})
  static om/IQuery
  (query [_]
         '[(:lst {:query-user ?query-user :query-ver ?query-ver})])
  Object
  (render [this]
          (println (str "om/props in render:" (om/props this)))
          (let [lst (:lst (om/props this))
                dontcare (println "lists props:" lst)
                {:keys [lsts curr ver user-id status]} lst
                ]
            (if (nil? user-id)
              (dom/div nil (dom/h3 nil "Please login")
                       "User id: " (lst-field this :user-id-field)
                       "Password: " (lst-field this :password-field)
                       (dom/br nil)
                       (login-button this)
                       (status-line (:login status))
                       )
              (dom/div nil
                       (logout-button this)
                     (dom/h2 nil "Lists")
                     (refresh-lists-button this user-id ver)
                     (status-line (:refresh_lists status))
                     (if-not (empty? lsts)
                       (lst-list this lsts (if (nil? curr) 0 curr))))
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
            dontcare (println (str wiki-search))
            query-params (get-in wiki-search [:params :query])]
        (put! c [:wiki-search query-params cb]))
      lst-search
      (let [{[lst-search] :children} (om/query->ast lst-search)
           dontcare (println (str lst-search))
           query-params (:params lst-search)]
        (put! c [:lst-search query-params cb]))
      )
    ))

(def wiki-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan event-chan)
    :remotes [:remote :wiki-search]}))

(def lst-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan event-chan)
    :remotes [:lst-search :lst-login :lst-logout]}))

(defn convert-json-lsts-result [result ver status-id]
  (let [{:strs [lsts user_id]} result
        dontcare (println (str "result: " result))
        json-status (get result "status")
        {:strs [info warn error]} json-status
        status {:info info :warn warn :error error}
        ]
      {:lsts lsts :user-id user_id :ver ver :status (assoc status :id status-id)}
      )
  )

(defn search-loop [c]
  (go
    (loop [[type data cb] (<! c)]
      (cond
        (= type :wiki-search)
          (let [query-params data
                [_ results] (<! (jsonp (str wiki-url query-params)))
                results-obj (js->clj results)
              ]
            (om/transact! wiki-reconciler `[(wiki/set-lst {:lst ~results-obj})])
            )
          (= type :lst-login)
          (let [
                dontcare (println (str "lst login data:" data))
                {:keys [user-id password ver]} data
                url (str "/loginGetItems/" user-id "/" password)
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result results1 ver :login)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)])
            )
          (= type :lst-logout)
          (let [
                url "/logout"
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                in-status (get results1 "status")
                {:strs [info warn error]} in-status
                status {:id :logout :info info :warn warn :error error}
                ]
            (om/transact! lst-reconciler `[(lst/set-status ~status)]))
          (= type :lst-search)
          (let [
                dontcare (println (str "lst query data:" data))
                {:keys [query-user query-ver]} data
                url "/getItems"
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result result1 query-ver :refresh-lists)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)])
            )
        :else
          nil
        )
       (recur (<! c)))
    ))


(search-loop event-chan)

(om/add-root! wiki-reconciler AutoCompleter
              (gdom/getElement "wiki"))

(om/add-root! lst-reconciler Lsts
              (gdom/getElement "lsts"))
