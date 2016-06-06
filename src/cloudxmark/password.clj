(ns cloudxmark.password
    (:require
      [cloudxmark.bookmark-store :as store]
      [cheshire.core :refer :all]))

(defn get-password-list [owner]
      (let []
        (generate-string [owner ["www.google.com" "www.yahoo.com"]])
        )
      )

(defn get-password [owner site]
  (let []
    [(str owner site)]
    )
  )
