(ns cloudxmark.web
  (:require
            [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [compojure.response :as response]
            [ring.util.response :as resp]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [cloudxmark.bookmark :refer [get-bookmarks]]
            [cloudxmark.bookmark-store :refer [migrate]]
    )
    (:gen-class)
    )

(defroutes routes
  (route/resources "/")
  (route/not-found "Page not found"))

(def application (wrap-defaults routes site-defaults))

(defn -main [& [port]]
;;      (migrate)
      (let [port (Integer. (or port (env :port) 5000))]
          (jetty/run-jetty application {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
