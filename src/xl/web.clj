(ns xl.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [clojure.spec :as s]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [compojure.response :as response]
            [ring.util.response :as resp]
            [ring.middleware.session :as sess]
            [ring.middleware.params :as params]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [xl.lst :refer [get-lsts get-items]]
            [xl.auth :refer [login is-admin-user? add-auth]]
            [xl.lst-store :refer [migrate drop-tables drop-table no-auth? add-lst check-add-settings-lst add-item update-item]]
            )
  (:import java.security.MessageDigest
           java.util.Base64
           java.util.UUID)
  (:gen-class)
  )

(defn- handle-callback [result params session]
  (let [result-str (generate-string result)]
    (let [{:keys [callback]} params]
      (if callback
        {
         :session session
         :status 200
         :headers {"Content-Type" "application/javascript" "charset" "utf-8"}
         :body (str callback "(" result-str ")")
         }
        {
         :session session
         :status 200
         :headers {"Content-Type" "application/json" "charset" "utf-8"}
         :body result-str
         }
        )
      )
    )
  )

(defn- permission-denied [params session]
  (handle-callback {:status {:error "Permission denied"}} params session)
  )

(def ^{:private true} ok-result
  {:result "ok"}
  )

(defn- get-user-id [session]
  (:user-id session)
  )

(defn- create-uuid-hex []
  (let [uuid (UUID/randomUUID)
        ]
    (str
     (Long/toHexString (.getMostSignificantBits uuid))
    (Long/toHexString (.getLeastSignificantBits uuid))
     )
    )
  )

(defn- get-uuid-hex [session name create]
  {:pre [(s/valid? map? session)
         (s/valid? string? name)
         (s/valid? boolean? create)
         ]
   :post [(s/valid? (s/or :nil-and-not-create (s/and nil? (constantly (not create)))
                          :string32 (s/and string? #(= (count %) 32))) %)
          ]
   }
  (let [uuid-map (:uuid-hex session)
        curr-uuid (if (nil? uuid-map) nil (get uuid-map name))]
    (if (and (nil? curr-uuid) create)
      (create-uuid-hex)
      curr-uuid
      )
    )
  )

(defmacro handle-auth-action [action params session]
  `(if (nil? (get-user-id ~session))
    (permission-denied ~params ~session)
    (handle-callback ~action ~params ~session)
  )
  )

(defmacro handle-auth-or-init-action [action params session]
  `(if (and (not (no-auth?)) (nil? (get-user-id ~session)))
    (permission-denied ~params ~session)
    (handle-callback ~action ~params ~session)
  )
  )

(defn- handle-login [id pass params session]
  (if (login id pass)
    (do
      (check-add-settings-lst id)
    (handle-callback {:user-id id} params (assoc session :user-id id))
     )
    (handle-callback {:status {:error "Failed to login"}} params session)
    )
  )

(defn- handle-login-get-items [user-id pass params session]
  (if (login user-id pass)
    (do
      (check-add-settings-lst user-id)
    (handle-callback (get-items user-id nil) params (assoc session :user-id user-id))
      )
    (handle-callback {:status {:error "Failed to login"}} params session)
    )
  )

(defn- is-admin? [session]
  (let [user-id (:user-id session)]
    (is-admin-user? user-id))
  )


(defn- handle-drop-table [table params session]
  (if (or (no-auth?) (is-admin? session))
    (do
      (drop-table table)
      (handle-callback ok-result params session)
      )
    (permission-denied params session)
    )
  )

(defn- handle-add-auth [id pass desc params session]
  (if (or (no-auth?) (is-admin? session))
    (do
      (add-auth {:id id :password pass :description desc})
      (handle-callback ok-result params session)
      )
    (permission-denied params session)
    )
  )

(defn- handle-add-lst [name desc params session]
  (let [
        user-id (get-user-id session)
        update-count (add-lst {:owner user-id :name name :description desc})
        ]
    (if (= update-count 1)
      (handle-callback (get-items user-id nil) params session)
      (handle-callback {:status {:error (str "Failed to add list: " name)}} params session)
    ))
   )

(defn- handle-add-item [lst-id-str name value params session]
  (let [
        lst-id (Integer/parseInt lst-id-str)
        user-id (get-user-id session)
        update-count (add-item {:owner user-id :lst-id lst-id :name name :value value})
        ]
    (if (= update-count 1)
      (handle-callback (get-items user-id nil) params session)
      (handle-callback {:status {:error (str "Failed to add item: " name)}} params session)
    ))
   )

(defn- handle-update-item [lst-id-str orig-name col-name value params session]
  (let [
        lst-id (Integer/parseInt lst-id-str)
        user-id (get-user-id session)
        update-count (update-item lst-id orig-name col-name value)
        ]
    (if (= update-count 1)
      (handle-callback (get-items user-id nil) params session)
      (handle-callback {:status {:error (str "Failed to update item: " orig-name)}} params session)
    ))
   )

(defn wrap-dir-index [handler]
  (fn [req]
    (handler
     (update-in req [:uri]
                #(if (= "/" %) "/index.html" %)))))

(defroutes routes
  (route/resources "/")
  (GET "/userId"  [ :as {params :params session :session}]
       (handle-callback {:user-id (get-user-id session)} params session)
       )

  (GET "/login"  [id pass :as {params :params session :session}]

       (handle-login id pass params session)
       )

  (GET "/dropTable" [table :as {params :params session :session}]
       (handle-drop-table table params session)
       )

  (GET "/getUUID" [name create :as {params :params session :session}]
       (handle-auth-or-init-action {"uuid-hex" (get-uuid-hex session name (= "true" create))} params session)
       )

  (GET "/addAuth"  [user-id pass desc :as {params :params session :session}]
       (let [ ]
       (handle-add-auth user-id pass (or desc "") params session)
         )
       )

  (GET "/addLst"  [name desc :as {params :params session :session}]
       (handle-add-lst name desc params session)
       )

  (GET "/addItem"  [lst-id name value :as {params :params session :session}]
       (handle-add-item lst-id name value params session)
       )

  (GET "/updateItem"  [lst-id orig-name col-name  value
                                                           :as {params :params session :session}]
       (handle-update-item lst-id orig-name col-name value params session)
       )

  (GET "/getLsts" {params :params session :session}
       (handle-auth-action
        (get-lsts (get-user-id session) nil)
        params session
        )
       )

  (GET "/loginGetItems"  [user-id pass :as {params :params session :session}]
       (handle-login-get-items user-id pass params session)
       )

    (GET "/addAuth"  [user-id pass desc :as {params :params session :session}]
       (handle-add-auth user-id pass desc params session)
       )

    (GET "/getItems" {params :params session :session}
         (handle-auth-action
        (get-items (get-user-id session) nil)
        params session
        )
       )

  (GET "/logout" {params :params session :session}
       (handle-callback
        {"user_id" nil "lsts" nil} params (assoc session :user-id nil)
        )
       )

  (GET "/getLst" [name :as {params :params session :session}]
       (handle-auth-action
        (get-lsts (get-user-id session) name)
        params session
        )
       )

  (GET "/getItemsByLst" [name :as {params :params session :session}]
       (handle-auth-action
        (get-items (get-user-id session) name)
        params session
        )
       )

  (route/not-found "Page not found"))

(def application (wrap-dir-index (wrap-defaults routes site-defaults)) )

(defn -main [& [port]]
  (migrate)

  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty application {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
