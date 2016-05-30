(require 'cljs.build.api)

(cljs.build.api/watch "src"
                      {:main 'cloudxmark.core
                       :output-to "js/main.js"})
