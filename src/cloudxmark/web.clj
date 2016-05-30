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
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [cloudxmark.bookmark :refer [get-bookmarks]]
            [cloudxmark.password :refer [get-password-list get-password]]
            [cloudxmark.auth :refer [login add-auth]]
            [cloudxmark.bookmark-store :refer [migrate dropTables get-pass no-auth?]]
    )
    (:import java.security.MessageDigest
      java.util.Base64)
    (:gen-class)
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
            (or (= user-id "xuelin") (= user-id "xuelin.wang@gmail.com")))
       )

(defn- handle-drop-tables [session]
       (if (or (no-auth?) (isAdmin? session))
         (do
           (dropTables)
           {:session session
            :status 200
            :headers {"Content-Type" "text/html"}
            :body "Success"
            }
           )
         {:session session
          :status 200
          :headers {"Content-Type" "text/html"}
          :body "Permission denied"
          }
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
         {:session session
          :status 200
          :headers {"Content-Type" "text/html"}
          :body "Permission denied"
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
 (GET "/userid"  [ :as {session :session}]
      (handle-userid session)
      )

 (GET "/login/:id/:pass"  [id pass :as {session :session}]
      (handle-login id pass session)
       )

 (GET "/dropTables" [ :as {session :session}]
      (handle-drop-tables session)
      )

 (GET "/addAuth/:id/:pass/:desc"  [id pass desc :as {session :session}]
      (handle-add-auth id pass desc session)
      )

 (GET "/getBookmarks/:owner" [owner] (get-bookmarks owner))

 (GET "/getPasswordList/:owner" [owner] (get-password-list owner))

 (GET "/getPassword/:owner/:site" [owner site] (get-password owner site))

  (route/not-found "Page not found"))

(def application (wrap-dir-index (wrap-defaults routes site-defaults)) )

(defn -main [& [port]]
      (migrate)
      (let [port (Integer. (or port (env :port) 5000))]
          (jetty/run-jetty application {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
