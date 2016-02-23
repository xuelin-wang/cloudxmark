(defproject cloudxmark "1.0.0-SNAPSHOT"
  :description "Cloudxmark web app"
  :url "http://cloudxmark.com"
  :license {:name "Eclipse Public License v1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/java.jdbc "0.4.2"]
                 [org.postgresql/postgresql "9.4.1207.jre7"]
                 [compojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-defaults "0.1.2"]
                 [cheshire "5.5.0"]
                 [environ "1.0.2"]]
  :main ^:skip-aot cloudxmark.web
  :resource-paths ["resources"]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.3.1"] [lein-ring "0.8.13"]]
  :ring {:handler cloudxmark.web/application
         :init cloudxmark.bookmark-store/migrate}
  :hooks [environ.leiningen.hooks]
  :uberjar-name "cloudxmark.jar"
  :profiles {:production {:env {:production true}}})
