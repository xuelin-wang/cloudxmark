(ns cloudxmark.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [compojure.response :as response]
            [ring.util.response :as resp]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [cloudxmark.bookmark :refer [get-bookmarks]]
    ))

(defn ping [id]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (str "Hello, " id)})

(defroutes app
  (GET "/user/:id" [id] (ping id))
  (GET "/getBookmarks" [] (get-bookmarks))
  (route/resources "/")
  (route/not-found "Page not found"))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
