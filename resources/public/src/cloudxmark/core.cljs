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

(def password-url
  "http://localhost:5000/getPasswordList?owner=abc")

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

(defmethod read :password/lst
  [{:keys [state ast] :as env} k {:keys [query]}]
  (merge
   {:value (get @state k [])}
   (when (nil? (get @state k))
     (println (str "query pw list:" k (nil? (get @state k))))
     {:password-search ast}))
  )

(defmethod read :password/curr
  [{:keys [state ast] :as env} k _]
   {:value (get @state k [])}
  )

(defmulti mutate om/dispatch)

(defmethod mutate 'password/set-curr
  [{:keys [state] :as env} _ {:keys [password/curr]}]
  {:action (fn []
             (do
               (swap! state update-in [:password/curr] (constantly curr))
               (println (str "set to " curr))
             ))
   }
  )

(defmethod mutate 'password/set-list
  [{:keys [state] :as env} _ {:keys [password/lst]}]
  {:action (fn []
             (do
               (swap! state update-in [:password/lst] (constantly lst))
               (println (str "set to " lst))
             ))
   }
  )

(def app-state
  (atom {
         :wiki/lst []
         :password/lst nil
         :password/curr 0
         })
  )

(defn result-list [results]
  (dom/ul #js {:key "result-list"}
          (map-indexed (fn [idx itm] (dom/li #js {:key idx} itm)) results)))

(defn list-select-field [comp idx curr-idx]
  (let [
        ]
  (dom/input
   #js {:key (str "password-list-check-" idx)
        :type "radio"
        :checked (= idx curr-idx)
        :onChange
        (fn [e]
          (if (.. e -target -checked)
            (om/transact! comp `[(password/set-curr {:password/curr ~idx})])
            (println (str "unchecked: " idx))
          )
          )
        })))

(defn password-list [comp results curr-idx]
  (dom/div #js {:key "password-list"}
           (map-indexed (fn [idx itm] (dom/div #js {:key (str password-list idx)}
                                               (list-select-field comp idx curr-idx)
                                               (dom/span #js {:key (str password-list idx "span")} itm)
                                               )) results)))

(defn search-field [comp query type]
  (let [[elem-key query-key]
        (case type :wiki ["wiki-search-field" :wiki-query] :password ["password-search-field" :password-query])
        ]
    (println (str "elem-key" elem-key " query-key:" query-key))
  (dom/input
   #js {:key elem-key
        :value query
        :onChange
        (fn [e]
          (om/set-query! comp
                         {:params {query-key (.. e -target -value)}}))})))

(defui PasswordList
  static om/IQueryParams
  (params [_]
          {:password-query "list"})
  static om/IQuery
  (query [_]
         '[:password/curr (:password/lst {:query ?password-query})])
  Object
  (render [this]
          (let [{:keys [password/lst password/curr]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil "Password List")
                     (if-not (empty? lst)
                       (password-list this lst (if (nil? curr) 0 curr)))))))

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
  (fn [{:keys [wiki-search password-search]} cb]
    (cond
      wiki-search
      (let [{[wiki-search] :children} (om/query->ast wiki-search)
            query (get-in wiki-search [:params :query])]
        (put! c [query :wiki cb]))
      password-search
      (let [{[password-search] :children} (om/query->ast password-search)
           query (get-in password-search [:params :query])]
        (put! c [query :password cb]))
      )
    ))

(def send-chan (chan))

(def wiki-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan send-chan)
    :remotes [:remote :wiki-search :password-search]}))

(def password-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan send-chan)
    :remotes [:remote :wiki-search :password-search]}))

(defn search-loop [c]
  (go
    (loop [[query type cb] (<! c)]
        (let [[key url]
              (case type
                :wiki [:wiki/lst wiki-url]
                :password [:password/lst password-url]
                )
              [_ results] (<! (jsonp (str url query)))
              ]
          (println (str key ": " "results: " results))
          (cb {key results})
          (case type
            :wiki (cb {key results})
            :password (om/transact! password-reconciler `[(password/set-list {:password/lst ~results})])
            )
          )
       (recur (<! c)))
    ))


(search-loop send-chan)

(om/add-root! wiki-reconciler AutoCompleter
              (gdom/getElement "wiki"))

(om/add-root! password-reconciler PasswordList
              (gdom/getElement "password"))
