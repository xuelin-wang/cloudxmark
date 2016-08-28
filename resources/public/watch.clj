(require 'cljs.build.api)

(cljs.build.api/watch "src"
                      {:main 'xl.core
                       :output-to "js/main.js"})
