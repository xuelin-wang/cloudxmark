(ns xl.lst-store-test
  (:require  [clojure.test :refer [deftest is run-tests]]
             [xl.lst-store :as store]
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
               results (store/query-db owner query)
               ]
           (println (str "results:" (into [] results)))
           {}
           )
         )))

(deftest test-auth
  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"]]
         :attributes [:id :version :password :description :seed :enc-version :reserved ]
         }
        results (store/query-db owner query)
        ]
    (println (str "results:" (into [] results)))
    (is (< (count results) 2))
    (if (pos? (count results))
      (let [query {:entity :auth
                   :alias "auth"
                   :args [[:= :id "testid"]]
                   }
            results (store/execute-ql-db nil query :delete :auth)
            ]
        (println (str "delete results" (into [] results)))
        (pos? (first results))
        )
      )
    )

  (is (= 1
         (let [owner "xuelin"
               auth {:id "testid" :version 0 :password "test pass" :description "test description" :seed "test seed" :enc-version 1 :reserved "XXX"}
               results (store/add-auth auth)
               ]
           (println (str "results:" (into [] results)))
           (first results)
           )
         ))

  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"] [:= :description "test description"]]
         :attributes [:id :password :description :seed :reserved ]
         }
        results (store/query-db owner query)
        ]
    (is (= (count results) 1))
    )

  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"]]
         :attributes [[:= :description "test description updated"] [:= :password "test pass updated"] ]
         }
        results (store/execute-ql-db owner query :update :auth)
        ]
    (println (str "results:" (into [] results)))
    (is (= (count results) 1))
    )
  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"] [:= :description "test description updated"] [:= :password "test pass updated"]]
         :attributes [:id :password :description :seed :reserved ]
         }
        results (store/query-db owner query)
        ]
    (is (= (count results) 1))
    )

  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"] [:= :description "test description"]]
         :attributes [:count]
         }
        results (store/query-db owner query)
        cnt (:count (first results))
        ]
    (is (zero? cnt))
    )

      (let [query {:entity :auth
                   :alias "auth"
                   :args [[:= :id "testid"]]
                   }
            results (store/execute-ql-db nil query :delete :auth)
            ]
        (println (str "delete results" (into [] results)))
        (= (first results) 1)
        )

  (let [owner nil
        query
        {:entity :auth
         :alias "auth"
         :args [[:= :id "testid"]]
         :attributes [:count]
         }
        results (store/query-db owner query)
        cnt (:count (first results))
        ]
    (is (zero? cnt))
    )
  )
