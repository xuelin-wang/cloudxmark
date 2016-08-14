(ns cloudxmark.common.util
  )

(defn throw-common [msg]
  (throw (Exception. msg)) ;clojureOnly
  (throw (js/Error. msg)) ;cljsOnly
  )
