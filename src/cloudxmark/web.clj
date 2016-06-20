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
            [cloudxmark.lst-store :refer [migrate drop-tables drop-table no-auth? add-lst]]
    )
    (:import java.security.MessageDigest
      java.util.Base64)
    (:gen-class)
    )

(defn- permission-denied [session]
         {:session session
          :status 200
          :headers {"Content-Type" "text/html"}
          :body "Permission denied"
          }
  )

(defn- handle-userid [session]
       {
        :status 200
        :headers {"Content-Type" "text/html"}
        :body (str "user id: " (:userid session "none"))
        }
       )

(defn- handle-login [id pass session]
       (if (login id pass)
         {:session (assoc session :userid id)
          :status 200
          :headers {"Content-Type" "text/html"}
          :body (str "user id: " id)
          }
         {:session (assoc session :userid nil)
          :status 200
          :headers {"Content-Type" "text/html"}
          :body "Failed to login"
          }
         )
       )

(defn- isAdmin? [session]
       (let [user-id (:userid session)]
            (or (= user-id "xwang") (= user-id "xuelin") (= user-id "xuelin.wang@gmail.com")))
       )

(defn- handle-drop-table [table session]
       (if (or (no-auth?) (isAdmin? session))
         (do
           (drop-table table)
           {:session session
            :status 200
            :headers {"Content-Type" "text/html"}
            :body "Success"
            }
           )
         (permission-denied session)
         )
       )

(defn- handle-add-auth [id pass desc session]
       (if (or (no-auth?) (isAdmin? session))
         (do
           (add-auth {:id id :password pass :description desc})
           {:session session
            :status 200
            :headers {"Content-Type" "text/html"}
            :body "Success"
            }
           )
         (permission-denied session)
         )
       )

(defn- handle-add-lst [name desc session]
       (if-let [user-id (:userid session)]
         (do
           (add-lst {:owner user-id :name name :description desc})
           {:session session
            :status 200
            :headers {"Content-Type" "text/html"}
            :body "Success"
            }
           )
         (permission-denied session)
         )
       )

(defn- handle-callback [result callback]
  (if callback
       {
        :status 200
        :headers {"Content-Type" "application/javascript" "charset" "utf-8"}
        :body (str callback "(" result ")")
        }
       {
        :status 200
        :headers {"Content-Type" "application/json" "charset" "utf-8"}
        :body (str result)
        }
       )
       )

(defn wrap-dir-index [handler]
      (fn [req]
          (handler
            (update-in req [:uri]
                       #(if (= "/" %) "/index.html" %)))))

(defroutes routes
 (route/resources "/")
 (GET "/userId"  [ :as {session :session}]
      (handle-userid session)
      )

 (GET "/login/:id/:pass"  [id pass :as {session :session}]
      (handle-login id pass session)
       )

 (GET "/dropTable/:table" [table :as {session :session}]
      (handle-drop-table table session)
      )

 (GET "/addAuth/:id/:pass/:desc"  [id pass desc :as {session :session}]
      (handle-add-auth id pass desc session)
      )

 (GET "/addLst/:name/:desc"  [name desc :as {session :session}]
      (handle-add-lst name desc session)
      )

 (GET "/getLsts" {params :params session :session}
      (if-let [user-id (:userid session)]
        (let [{:keys [callback]} params]
          (handle-callback (get-lsts user-id nil) callback)
          )
        (permission-denied session)
        )
      )
 (GET "/getItems" {params :params session :session}
      (if-let [user-id (:userid session)]
        (let [{:keys [callback]} params]
          (handle-callback (get-items user-id nil) callback)
          )
        (permission-denied session)
        )
      )

 (GET "/getLst/:name" [name :as {params :params session :session}]
      (if-let [user-id (:userid session)]
        (let [{:keys [callback]} params]
          (handle-callback (get-lsts user-id name) callback)
          )
        (permission-denied session)
        )
      )
 (GET "/getItemsByLst/:name" [name :as {params :params session :session}]
      (if-let [user-id (:userid session)]
        (let [{:keys [callback]} params]
          (handle-callback (get-items user-id name) callback)
          )
        (permission-denied session)
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
