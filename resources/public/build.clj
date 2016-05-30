(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'cloudxmark.core
                       :output-to "js/main.js"})
