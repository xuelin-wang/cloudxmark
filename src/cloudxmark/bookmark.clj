(ns cloudxmark.bookmark
    (:require
      [cloudxmark.bookmark-store :as store]
      [cheshire.core :refer :all]))

(defn get-bookmarks [owner]
      (let [
            bookmarks (store/find-by-link nil owner)
            ]
           (generate-string bookmarks)
           )
      )