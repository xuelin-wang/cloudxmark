(ns xl.password
    (:require
      [xl.lst-store :as store]
      [cheshire.core :refer :all]))

(defn get-password-list [owner]
      (let []
        (generate-string [owner [(str "www.google.com" (System/currentTimeMillis)) "www.yahoo.com"]])
        )
      )

(defn get-password [owner site]
  (let []
    [(str owner site)]
    )
  )
