(ns cloudxmark.bookmark
    (:require
      [cloudxmark.bookmark-store :as store]
      [cheshire.core :refer :all]))

(defn get-bookmarks []
      (let [
            bookmarks (store/find-by-link nil)
            ]
           (generate-string bookmarks)
           )
      )