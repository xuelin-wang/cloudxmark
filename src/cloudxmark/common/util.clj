(ns cloudxmark.common.util
  )

(defn throw-common [msg]
  (throw (Exception. msg)) ;clojureOnly

  )
