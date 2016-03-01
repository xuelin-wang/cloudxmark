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
            [cloudxmark.auth :refer [login add-auth]]
            [cloudxmark.bookmark-store :refer [migrate get-pass no-auth?]]
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
          :body ("Failed to login")
          }
         )
       )

(defn- handle-add-auth [id pass desc session]
       (if (or (no-auth?) (= (:userid session) "xuelin"))
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

(defroutes routes
 (GET "/userid"  [ :as {session :session}]
      (handle-userid session)
      )

 (GET "/login/:id/:pass"  [id pass :as {session :session}]
      (handle-login id pass session)
       )

 (GET "/addAuth/:id/:pass/:desc"  [id pass desc :as {session :session}]
      (handle-add-auth id pass desc session)
      )

  (GET "/getBookmarks" [] (get-bookmarks))
  (route/resources "/")
  (route/not-found "Page not found"))

(def application (wrap-defaults routes site-defaults))

(defn -main [& [port]]
      (migrate)
      (let [port (Integer. (or port (env :port) 5000))]
          (jetty/run-jetty application {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
