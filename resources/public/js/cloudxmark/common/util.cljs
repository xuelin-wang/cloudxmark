(ns cloudxmark.common.util
  )

(defn throw-common [msg]

  (throw (js/Error. msg)) ;cljsOnly
  )
