(require 'cljs.build.api)

(cljs.build.api/build "src"
                       {:output-to "js/main.js"
                        :optimizations :advanced})

(System/exit 0)
