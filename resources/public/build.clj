(require 'cljs.build.api)

(cljs.build.api/build "src"
                      {:main 'xl.core
                       :output-to "js/main.js"})
