(ns cloudxmark.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [compojure.response :as response]
            [ring.util.response :as resp]
            [ring.middleware.session :as sess]
            [ring.middleware.params :as params]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [cloudxmark.lst :refer [get-lsts get-items]]
            [cloudxmark.auth :refer [login add-auth]]
            [cloudxmark.lst-store :refer [migrate drop-tables drop-table no-auth? add-lst add-item update-item]]
            )
  (:import java.security.MessageDigest
           java.util.Base64)
  (:gen-class)
  )

(defn- handle-callback [result params session]
  (let [result-str (generate-string result)]
    (let [{:keys [callback]} params]
      (println (str "hasbacllback:"  (boolean callback) "body:" callback "(" result-str ")" ))
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

(defn- handle-auth-action [result params session]
  (if (nil? (get-user-id session))
    (permission-denied params session)
    (handle-callback result params session)
  )
  )

(defn- handle-login [id pass params session]
  (if (login id pass)
    (handle-callback {:user-id id} params (assoc session :user-id id))
    (handle-callback {:status {:error "Failed to login"}} params session)
    )
  )

(defn- handle-login-get-items [user-id pass params session]
  (if (login user-id pass)
    (handle-callback (get-items user-id nil) params (assoc session :user-id user-id))
    (handle-callback {:status {:error "Failed to login"}} params session)
    )
  )

(defn- isAdmin? [session]
  (let [user-id (:userid session)]
    (or (= user-id "xwang") (= user-id "xuelin") (= user-id "xuelin.wang@gmail.com")))
  )

(defn- handle-admin-action [result params session]
  (if (or (no-auth?) (isAdmin? session))
    (handle-callback result params session)
    (permission-denied params session)
    )
  )

(defn- handle-drop-table [table params session]
  (handle-admin-action
    (do
      (drop-table table)
      (handle-callback ok-result params session)
      )
    params session
    )
  )

(defn- handle-add-auth [id pass desc params session]
  (handle-admin-action
    (do
      (add-auth {:id id :password pass :description desc})
      ok-result
      )
    params session
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

(defn- handle-add-item [lst-id name value params session]
  (let [
        user-id (get-user-id session)
        update-count (add-item {:owner user-id :lst-id lst-id :name name :value value})
        ]
    (if (= update-count 1)
      (handle-callback (get-items user-id nil) params session)
      (handle-callback {:status {:error (str "Failed to add item: " name)}} params session)
    ))
   )

(defn- handle-update-item [lst-id orig-name col-name value params session]
  (let [
        user-id (get-user-id session)
        update-count (update-item {:lst-id lst-id :orig-name orig-name :col-name col-name :value value})
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

  (GET "/login/:id/:pass"  [id pass :as {params :params session :session}]
       (handle-login id pass params session)
       )

  (GET "/dropTable/:table" [table :as {params :params session :session}]
       (handle-drop-table table params session)
       )

  (GET "/addAuth/:id/:pass/:desc"  [id pass desc :as {params :params session :session}]
       (handle-add-auth id pass desc params session)
       )

  (GET "/addLst/:name/:desc"  [name desc :as {params :params session :session}]
       (handle-add-lst name desc params session)
       )

  (GET "/addItem/:lst-id/:name/:value"  [lst-id name value :as {params :params session :session}]
       (handle-add-item lst-id name value params session)
       )

  (GET "/updateItem/:lst-id/:orig-name/:col-name/:value"  [lst-id orig-name col-name  value
                                                           :as {params :params session :session}]
       (handle-update-item lst-id orig-name col-name value params session)
       )

  (GET "/getLsts" {params :params session :session}
       (handle-auth-action
        (get-lsts (get-user-id session) nil)
        params session
        )
       )

  (GET "/loginGetItems/:id/:pass"  [id pass :as {params :params session :session}]
       (handle-login-get-items id pass params session)
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

  (GET "/getLst/:name" [name :as {params :params session :session}]
       (handle-auth-action
        (get-lsts (get-user-id session) name)
        params session
        )
       )

  (GET "/getItemsByLst/:name" [name :as {params :params session :session}]
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
