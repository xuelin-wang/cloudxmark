(ns cloudxmark.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [goog.crypt]
            [goog.crypt.Aes]
            [goog.crypt.Cbc]
            [goog.crypt.base64]
            [cljs.core.async :as async :refer [<! >! put! chan]]
            [clojure.string :as string]
            [com.rpl.specter :as specter]
            [om.core :refer [set-state! get-state]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)

(def block-size 16)
(def seed-init-vector (goog.crypt.hexToByteArray "3ea1bae20d97b4a0b422da8b259f0c8c"))
(def seed-key-bytes (goog.crypt.hexToByteArray "5zal214336bja15b716e0335341e1ba7"))

(defn create-aes [key-bytes]
  (goog.crypt.Aes. key-bytes))

(defn create-aes-cbc [key-bytes]
  (goog.crypt.Cbc. (goog.crypt.Aes. key-bytes)))

(defn pad-bytes [bytes target-len ch]
  (let [
        tmp-len (-> (.-length bytes) (-) (rem target-len))
        pad-len (if (neg? tmp-len) (+ target-len tmp-len) tmp-len)
        pad-str (clojure.string/join (repeat pad-len ch))
        padded-bytes (goog.crypt.stringToByteArray pad-str)
        ]
        (.concat  bytes padded-bytes)
    )
  )

(defn cbc-enc-str [plain-text cbc init-vector]
  (let [
        plain-bytes (goog.crypt.stringToByteArray plain-text)
        padded-bytes (pad-bytes plain-bytes block-size " ")
        enc-bytes (.encrypt cbc padded-bytes init-vector)
        ]
    (goog.crypt.byteArrayToString enc-bytes)))

(defn aes-enc-str [plain-text aes]
  (let [plain-bytes (goog.crypt.stringToByteArray plain-text)
        padded-bytes (pad-bytes plain-bytes block-size " ")]
  (goog.crypt.byteArrayToString
    (.encrypt aes padded-bytes))
  ))

(defn aes-dec-str [cypher-text aes]
  (goog.crypt.byteArrayToString (.decrypt aes (goog.crypt.stringToByteArray cypher-text)))
  )

(defn xor-bytes [b1 b2 max-len]
  (loop [idx 0]
    (let [len1 (.-length b1)]
      (if (or (= idx len1) (= idx max-len)) nil
          (do
            (aset b1 idx (bit-xor (aget b1 idx) (aget b2 idx)))
            (recur (inc idx))))))
  b1
  )

(defn gen-bytes [from-str seed-bytes]
  (let [
        bytes (goog.crypt.stringToByteArray from-str)
        padded-bytes (pad-bytes bytes block-size " ")
        xored-bytes (xor-bytes padded-bytes seed-bytes block-size)
        ]
    (if (= (.-length xored-bytes) block-size) xored-bytes (.slice xored-bytes 0 block-size))
    )
  )

(defn gen-key-bytes [from-str]
  (gen-bytes from-str seed-key-bytes))

(defn gen-init-vector [from-str]
  (gen-bytes from-str seed-init-vector))

(defn enc-password [password]
  (let [
        key-bytes (gen-key-bytes password)
        cbc (create-aes-cbc key-bytes)
        ]
    (cbc-enc-str password cbc seed-init-vector)
    )
  )

(defn cbc-dec-str [cypher-text cbc init-vector]
  (let [
        cypher-bytes (goog.crypt.stringToByteArray cypher-text)
        plain-bytes (.decrypt cbc cypher-bytes init-vector)
        ]
    (.trim (goog.crypt.byteArrayToString plain-bytes))))

(defn jsonp
  ([uri] (jsonp (chan) uri))
  ([c uri]
   (let [gjsonp (Jsonp. (Uri. uri))]
     (println (str "before send " uri))
     (.send gjsonp nil #(put! c %) #(println (str "error!" %)))
     c)))

(def event-chan (chan))

(defmulti read om/dispatch)

(defmethod read :lst
  [{:keys [state ast] :as env} _ {:keys [query-ver query-user]}]
  (let [lst (:lst @state)
        {:keys [lsts curr ver user-id status]} lst]
    (println (str "curruser:" user-id ",query ver:" query-ver ", ver:" ver ",query-user:" query-user))
    (if
      (and (some? user-id) (or (> query-ver ver) (nil? lsts)))
      (do
        (println (str "remote query lists:"  (nil? lsts)))
      {:lst-search ast}
      )
              {:value lst}
      )
          )
    )

(defn update-state-by-path [state path merge? value]
  (println (str "state before update-state: " @state))
  (let [new-value (if merge? (merge (get-in @state path) value) value)]
       (swap! state assoc-in path new-value)
  )
  (println (str "state after update-state: " @state))
  )

(defmulti mutate om/dispatch)


(defmethod mutate 'lst/set-status
  [{:keys [state] :as env} _ {:keys [id] :as status}]
  {:action (fn []
      (update-state-by-path state [:lst :status id] false status)
             )
   }
  )

(defmethod mutate 'lst/update-state
  [{:keys [state] :as env} _ {:keys [path merge? value]}]
  {:action (fn []
             (update-state-by-path state path merge? value)
             )
   }
  )

(defmethod mutate 'lst/set-item-col
  [{:keys [state] :as env} _ {:keys [lst-idx item-idx col-name value] :as data-map}]
  {:action (fn[]
             (let [
                   lsts (get-in @state [:lst :lsts])
                   lst (nth lsts lst-idx)
                   cbc (get-in @state [:lst :cbc])
                   lst-id (get lst "lst_id")
                   item (nth (get lst "items") item-idx)
                   orig-name (get item "name")
                   encoded-value (if (= col-name "value") (cbc-enc-str value cbc (gen-init-vector orig-name)) value)
                   ]
               (put! event-chan [:lst-set-item-col {:lst-id lst-id :orig-name orig-name :col-name col-name :value encoded-value} nil])
               ))
   }
  )

(defmethod mutate 'lst/set-field-state
  [{:keys [state] :as env} _ {:keys [field-id value]}]
  {:action (fn []
             (update-state-by-path state [:lst field-id] false value)
             )
   }
  )

(defmethod mutate 'lst/login
  [{:keys [state] :as env} _ {:keys [user-id password ver] :as data-map}]
  {:action (fn []
             (println (str "state before put chan:" @state " datamap:" data-map))
             (put! event-chan [:lst-login (assoc data-map :password (enc-password password)) nil])
     )
   }
  )

(defmethod mutate 'lst/add-user
  [{:keys [state] :as env} _ {:keys [user-id password] :as data-map}]
  {:action (fn []
        (put! event-chan [:lst-add-user data-map nil])
     )
   }
  )

(defmethod mutate 'lst/add-lst
  [{:keys [state] :as env} _ {:keys [name description] :as data-map}]
  {:action (fn []
             (println (str "state before put chan:" @state " datamap:" data-map))
             (put! event-chan [:lst-add-lst {:name name :description description} nil])
             )
   }
  )

(defmethod mutate 'lst/add-item
  [{:keys [state] :as env} _ {:keys [name value] :as data-map} ]
  {:action (fn []
             (let [
                   lsts (get-in @state [:lst :lsts])
                   dontcare0 (println (str "additem before cbc: name: " name ", value:" value ",state:" @state))
                   cbc (get-in @state [:lst :cbc])
                   dont (println "cbc:" (str cbc))
                   encoded-value (cbc-enc-str value cbc (gen-init-vector name))
                   dontcare (println (str "additem: name: " name ", value:" value ",encoded:" encoded-value))
                   curr (or (get-in @state [:lst :curr]) 0)
                   lst-id (get (nth lsts curr) "lst_id")
                   ]
             (println (str "state before add-item put chan:" @state " datamap:" data-map))
             (put! event-chan [:lst-add-item {:lst-id lst-id :name name :value encoded-value} nil]))
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

(defn dec-items-vals [lsts cbc]
  (map (fn [lst]
         (assoc lst "items"
                (map (fn [item]
                       (assoc item "value"
                              (cbc-dec-str (get item "value") cbc (gen-init-vector (get item "name"))))
                       )
                     (get lst "items"))
         ))
       lsts)
  )

(defmethod mutate 'lst/set-lst
  [{:keys [state] :as env} _ {:keys [status lsts user-id is-admin? ver cbc] :as data-map}]
  {:action (fn []
             (println (str "state before set-lst put chan:" @state " datamap:" data-map))
             (let [
                   status-id (:id status)
                   new-ver (if (nil? ver) (inc (get-in @state [:lst :ver])) ver)
                   new-cbc (if (nil? cbc) (get-in @state [:lst :cbc]) cbc)
                   new-lsts (dec-items-vals lsts new-cbc)
                   ]

               (if (and status status-id)
                 (swap! state assoc-in [:lst :status status-id] status)
                 )
             (swap! state assoc :lst (merge (:lst @state) {:lsts new-lsts :ver new-ver :user-id user-id :is-admin? is-admin? :cbc new-cbc}))
             (println (str "state after setlist:" @state)))
     )
   }
  )

(def app-state
  (atom {
         :lst {
               :lsts nil
               :ver 0
               :curr 0
               :user-id nil
               }
         })
  )

(defn lst-field
  ([comp field-id]
   (lst-field comp field-id "text"))
  ([comp field-id type]
  (let [dontcare (println (str "comp props" (om/props comp)))
        field-state (get-in (om/props comp) [:lst field-id])
        dontcare2 (println (str "fieldstate for " field-id " is: " (get (om/props comp) field-id)))
        ]
    (dom/input #js {:key (str "lst-field-" field-id)
                    :type type
        :value (or field-state "")
        :onChange
                  (fn [e]
                    (let [value (.. e -target -value)]
                      (println (str "the field:" field-id ":" value))
                      (om/transact! comp `[(lst/set-field-state {:field-id ~field-id :value ~value})])
                         ))}))))
(defn item-field
  [comp lst-idx item-idx item col-name]
  (let [
        field-val (or (get item col-name) "")
        ]
    (dom/input #js {:key (str "item-field-" lst-idx "-" item-idx "-" col-name)
        :value field-val
        :onChange
                  (fn [e]
                    (let [value (.. e -target -value)]
                      (om/transact! comp `[(lst/set-item-col {:lst-idx ~lst-idx :item-idx  ~item-idx
                                                              :col-name ~col-name :value ~value})])
                         ))})))

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
  (dom/button #js {:type "button" :key "refreshButton"
                   :onClick
                   (fn [e]
                     (if (nil? user-id)
                       (swap! app-state assoc-in [:lst :status :refresh-lists] {:error "Permission denied"})
                       (om/set-query! comp {:params {:query-ver (inc lst-ver)}})
                     )
                   )}
              (dom/span nil "Refresh List") )
  )

(defn add-item-button [comp]
  (dom/button #js {:type "button" :key "addItemButton"
                   :onClick (fn [e]
                              (let [lst-map (:lst (om/props comp))
                                    new-item-name (:new-item-name-field lst-map)
                                    new-item-value (or (:new-item-value-field lst-map) "")
                                    error (if
                                            (clojure.string/blank? new-item-name) "New Item Name Required"
                                             nil)
                                    ]
                              (if (clojure.string/blank? error)
                                (om/transact! comp `[(lst/add-item {:name ~new-item-name :value ~new-item-value})])
                         (om/transact! comp `[(lst/set-status {:id :add-item :error ~error})])
                              )))
                   }
              (dom/span nil "Add Item")
              )
  )

(defn lst-select-field [comp idx curr-idx]
  (let [
        ]
  (dom/input
   #js {:key (str "lst-lst-check-" idx)
        :type "radio"
        :checked (= idx curr-idx)
        :onChange
        (fn [e]
          (if (.. e -target -checked)
            (let [path [:lst :curr]
                  merge? false
                  value idx
                  ]
              (om/transact! comp `[(lst/update-state {:path ~path :merge? ~merge? :value ~value})])
              )
            (println (str "unchecked: " idx))
          )
          )
        })))

(defn add-lst-button [comp]
  (dom/button #js {:type "button" :key "addLstButton"
                   :onClick (fn [e]
                              (let [lst-map (:lst (om/props comp))
                                    new-lst-name (:new-lst-name-field lst-map)
                                    new-lst-description (or (:new-lst-description-field lst-map) "")
                                    error (if
                                            (clojure.string/blank? new-lst-name) "New List Name Required"
                                            nil)
                                    ]
                              (if (clojure.string/blank? error)
                                (om/transact! comp `[(lst/add-lst {:name ~new-lst-name :description ~new-lst-description})])
                         (om/transact! comp `[(lst/set-status {:id :add-lst :error ~error})])
                              )))
                   }
              (dom/span nil "Add List")
              )
  )

(defn lst-edit-area [comp]
  (let [lst (:lst (om/props comp))
        {:keys [lsts status curr]} lst
        curr-idx (or curr 0)
        items (if (seq lsts) (get (nth lsts curr-idx) "items") nil)
        ]
    (println (str "items are: " items))
    (dom/div #js {}
    (if (seq items)
    (dom/div #js {:key (str "lst-edit-area-" curr-idx)}
             (map-indexed (fn [idx item]
                            (dom/div #js {:key (str "item-" idx)}
                                     (item-field comp curr-idx idx item "name")
                                     (item-field comp curr-idx idx item "value")
                                     )
                                      )
                 items)
             )
    )
    (dom/div #js {:key (str "lst-add-item-" curr-idx)}
             "New Item Name: " (lst-field comp :new-item-name-field)
             " Value: " (lst-field comp :new-item-value-field)
             (add-item-button comp)
             (status-line (:add-item status))
             )
    )
    )
  )

(defn lst-add-area [comp]
  (let [lst (:lst (om/props comp))
                dontcare (println "lists props:" lst)
                {:keys [status]} lst
                ]
    (dom/div #js {:key (str "lst-edit-area-" -1)}
             "New List: "
             (lst-field comp :new-lst-name-field)
             "Description: "
             (lst-field comp :new-lst-description-field)
             (add-lst-button comp)
             (status-line (:add-lst status))
             )
    )
  )

(defn lst-lst [comp lsts curr-idx]
  (dom/div #js {:key "lst-lst"}
           (if (seq lsts)
           (map-indexed (fn [idx item] (dom/div #js {:key (str lst-lst idx)}
                                               (lst-select-field comp idx curr-idx)
                                               (dom/span #js {:key (str lst-lst idx "span")} (item "name" "?"))
                                               (if (= idx curr-idx) (lst-edit-area comp) )
                                               )) lsts))
           (dom/h3 nil "Add new list:")
           (lst-add-area comp)
           ))

(defn search-field [comp query type]
  (let [[elem-key query-key]
        (case type :lst ["lst-search-field" :ver])
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
                         (do
                           (om/transact! comp `[(lst/login {:user-id ~user-id :password ~password :ver ~new-ver})])
                         (om/transact! comp `[(lst/set-status {:id :login :error nil})]))
                         (om/transact! comp `[(lst/set-status {:id :login :error ~error})])
                         )
                       (println (str "stateafterclick:" @app-state))
                       )
                     )
                   } "Login")

)
(defn add-user-button [comp]
  (dom/button #js {:type "button"
                   :onClick
                   (fn [e]
                     (let [lst-map (:lst (om/props comp))
                           new-user-id (:new-user-id-field lst-map)
                           new-password (:new-password-field lst-map)
                           error (cond
                                   (clojure.string/blank? new-user-id) "New user name required"
                                   (clojure.string/blank? new-password) "New password required"
                                   :else nil)
                           ]
                       (if (clojure.string/blank? error)
                         (do
                           (om/transact! comp `[(lst/add-user {:user-id ~new-user-id :password ~new-password})])
                         (om/transact! comp `[(lst/set-status {:id :add-user :error nil})]))
                         (om/transact! comp `[(lst/set-status {:id :add-user :error ~error})])
                         )
                       (println (str "stateafterclick:" @app-state))
                       )
                     )
                   } "Add User")
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
                {:keys [lsts curr ver user-id is-admin? status]} lst
                ]
            (dom/div nil
            (if (nil? user-id)
              (dom/div nil (dom/h3 nil "Please login")
                       "User id: " (lst-field this :user-id-field)
                       "Password: " (lst-field this :password-field "password")
                       (dom/br nil)
                       (login-button this)
                       (status-line (:login status))
                       ))
             (if (not (nil? user-id))
              (dom/div nil
                       (logout-button this)
                     (dom/h2 nil "Lists")
                     (refresh-lists-button this user-id ver)
                     (status-line (:refresh_lists status))
                     (lst-lst this lsts (if (nil? curr) 0 curr))))
             (if is-admin?
              (dom/div nil (dom/h3 nil "Add new user")
                       "New User id: " (lst-field this :new-user-id-field)
                       "New Password: " (lst-field this :new-password-field "password")
                       (dom/br nil)
                       (add-user-button this)
                       (status-line (:add-user status))
                       )))
            )))

(defn send-to-chan [c]
  (fn [{:keys [lst-search]} cb]
    (cond
      lst-search
      (let [{[lst-search] :children} (om/query->ast lst-search)
           dontcare (println (str lst-search))
           query-params (:params lst-search)]
        (put! c [:lst-search query-params cb]))
      )
    ))

(def lst-reconciler
  (om/reconciler
   {:state   app-state
    :parser  (om/parser {:read read :mutate mutate})
    :send    (send-to-chan event-chan)
    :remotes [:lst-search :lst-login :lst-add-user :lst-logout]}))

(defn convert-json-lsts-result [result ver status-id]
  (let [{:strs [lsts user_id is_admin]} result
        dontcare (println (str "result: " result))
        json-status (get result "status")
        {:strs [info warn error]} json-status
        status {:info info :warn warn :error error}
        ]
      {:lsts lsts :user-id user_id :is-admin? (= "true" is_admin) :ver ver :status (assoc status :id status-id)}
      )
  )

(defn convert-json-status [result status-id]
  (let [json-status (get result "status")
        {:strs [info warn error]} json-status
        status {:info info :warn warn :error error}
        ]
      (assoc status :id status-id)
      )
  )

(defn search-loop [c]
  (go
    (loop [[type data cb] (<! c)]
      (cond
          (= type :lst-login)
          (let [
                dontcare (println (str "lst login data:" data))
                {:keys [user-id password ver]} data
                url (str "/loginGetItems?user-id=" (js/encodeURIComponent user-id) "&pass=" (js/encodeURIComponent password))
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                cbc (create-aes-cbc (gen-key-bytes password))
                results2 (assoc (convert-json-lsts-result results1 ver :login) :cbc cbc)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)])
            )

          (= type :lst-add-user)
          (let [
                {:keys [user-id password ver]} data
                encoded-password (enc-password password)
                url (str "/addAuth?user-id=" (js/encodeURIComponent user-id) "&pass=" (js/encodeURIComponent encoded-password))
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                status (convert-json-status results1 :add-user)
                ]
            (om/transact! lst-reconciler `[(lst/set-status ~status)]))

          (= type :lst-logout)
          (let [
                url "/logout"
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                status (convert-json-status results1 :logout)
                ]
            (om/transact! lst-reconciler `[(lst/set-status ~status)]))
          (= type :lst-add-lst)
          (let [{:keys [name description]} data
                url (str "/addLst?name=" (js/encodeURIComponent name) "&desc=" (js/encodeURIComponent description))
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result results1 nil :add-lst)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)]))

          (= type :lst-add-item)
          (let [{:keys [lst-id name value]} data
                url (str "/addItem?lst-id=" (js/encodeURIComponent lst-id) "&name=" (js/encodeURIComponent name) "&value=" (js/encodeURIComponent value))
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result results1 nil :add-item)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)]))

          (= type :lst-set-item-col)
          (let [{:keys [lst-id orig-name col-name value]} data
                url (str "/updateItem?lst-id=" (js/encodeURIComponent lst-id) "&orig-name=" (js/encodeURIComponent orig-name) "&col-name=" (js/encodeURIComponent col-name) "&value=" (js/encodeURIComponent value))
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result results1 nil :add-item)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)]))

          (= type :lst-search)
          (let [
                dontcare (println (str "lst query data:" data))
                {:keys [query-user query-ver]} data
                url "/getItems"
                results-js (<! (jsonp url))
                results1 (js->clj results-js)
                results2 (convert-json-lsts-result results1 query-ver :refresh-lists)
                ]
            (om/transact! lst-reconciler `[(lst/set-lst ~results2)])
            )
        :else
          nil
        )
       (recur (<! c)))
    ))


(search-loop event-chan)

(om/add-root! lst-reconciler Lsts
              (gdom/getElement "lsts"))
