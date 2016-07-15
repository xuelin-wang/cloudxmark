(defproject cloudxmark "1.0.0-SNAPSHOT"
  :description "Cloudxmark web app"
  :url "http://cloudxmark.com"
  :license {:name "Eclipse Public License v1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha10"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.postgresql/postgresql "9.4.1208.jre7"]
                 [compojure "1.5.1"]
                 [ring/ring-core "1.6.0-beta1"]
                 [ring/ring-jetty-adapter "1.6.0-beta1"]
                 [ring/ring-defaults "0.2.1"]
                 [com.rpl/specter "0.11.2"]
                 [cheshire "5.6.2"]
                 [environ "1.0.3"]]
  :main ^:skip-aot cloudxmark.web
  :resource-paths ["resources"]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.3.1"] [lein-ring "0.8.13"]]
  :ring {:handler cloudxmark.web/appolication
         :init cloudxmark.bookmark-store/migrate}
  :uberjar-name "cloudxmark.jar"
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}
             :uberjar {:aot :all}})
