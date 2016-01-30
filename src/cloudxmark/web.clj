(ns cloudxmark.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.util.response :as resp]
            [environ.core :refer [env]]))

(defn ping []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (pr-str ["Hello from cloudxmark Heroku"])})

(defroutes app
  (GET "/ping" []
       (ping))
  (GET "/" [] (resp/file-response "xmark_app.html" {:root "public"}))
  (ANY "*" []
       (route/not-found (slurp (io/resource "public/xmark_app.html")))))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
