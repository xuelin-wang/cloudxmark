(ns cloudxmark.lst-store-test
  (:require  [clojure.test :refer [deftest is run-tests]]
             [cloudxmark.lst-store :as store]
             )
  )

(deftest test-query
  (is (= {}
         (let [owner "xuelin"
               query
             {:entity :lst
              :alias "l"
              :args [[:= :owner :$lst_owner]]
              :attributes [:lst-id :name
                           {:entity :item :alias "i"
                            :args [[:= :l.lst_id :i.lst_id]] :attributes [:name]}]
              }
               results (store/query-lst owner query)
               ]
           (println (str "results:" (into [] results)))
           {}
           )
         ))
  )
