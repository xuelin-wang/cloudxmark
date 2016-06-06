(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {}
   :build-ids ["dev"]
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["src"]
     :compiler {:main 'cloudxmark.core
                :asset-path "js"
                :output-to "js/main.js"
                :output-dir "js"
                :source-map true
                :verbose true}}]})

(ra/cljs-repl)
