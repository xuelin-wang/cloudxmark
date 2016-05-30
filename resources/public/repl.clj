(require 'cljs.repl)
(require 'cljs.build.api)
(require 'cljs.repl.browser)

(cljs.build.api/build "src"
                      {:main 'cloudxmark.core
                       :output-to "js/main.js"
                       :verbose true})

(cljs.repl/repl (cljs.repl.browser/repl-env)
                :watch "src"
                  :output-dir "js")
