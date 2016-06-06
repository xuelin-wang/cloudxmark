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
   (when-not (or (string/blank? query)
                 (< (count query) 3))
     (do
     (println (str "pw search: " query))
     {:password-search ast}))
   )
  )

(defn result-list [results]
  (dom/ul #js {:key "result-list"}
          (map-indexed (fn [idx itm] (dom/li #js {:key idx} itm)) results)))

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
          {:password-query ""})
  static om/IQuery
  (query [_]
         '[(:password/lst {:query ?password-query})])
  Object
  (render [this]
          (let [{:keys [password/lst]} (om/props this)]
            (dom/div nil
                     (dom/h2 nil "Password List")

                     (cond->
                         [(search-field this (:password-query (om/get-params this)) :password)]
                                 (not (empty? lst)) (conj (result-list lst)))))))

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
                  (cb {key results}))
       (recur (<! c)))
    ))

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

(def app-state
  (atom {
         :wiki/lst []
         :password/lst []
         })
  )

(def wiki-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read})
    :send    (send-to-chan send-chan)
    :remotes [:remote :wiki-search :password-search]}))

(def password-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read})
    :send    (send-to-chan send-chan)
    :remotes [:remote :wiki-search :password-search]}))

(search-loop send-chan)

(om/add-root! wiki-reconciler AutoCompleter
              (gdom/getElement "wiki"))

(om/add-root! password-reconciler PasswordList
              (gdom/getElement "password"))
