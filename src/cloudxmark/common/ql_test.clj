(ns cloudxmark.common.ql-test
  (:require

    [clojure.test :as test] ;clojureOnly
    [cloudxmark.common.ql :as ql] )
  )


(test/deftest test-kebab
  (test/is (= :a (ql/kebab :a)))
  (test/is (= :a-b (ql/kebab :a-b)))
  (test/is (= :a-b (ql/kebab :a_b)))
  (test/is (= :a (ql/kebab "a")))
  (test/is (= :1 (ql/kebab "1")))
  (test/is (= :a-b (ql/kebab "a_b")))
  (test/is (= :a-b (ql/kebab "a-b")))
  (test/is (= :-b- (ql/kebab "-b_")))
  (test/is (= :>- (ql/kebab ">_")))
  )

(test/deftest test-unkebab
  (test/is (= "a" (ql/unkebab :a)))
  (test/is (= ">_" (ql/unkebab :>-)))
  (test/is (= "a" (ql/unkebab "a")))
  (test/is (= "a_b" (ql/unkebab :a-b)))
  (test/is (= "a_b" (ql/unkebab :a_b)))
  (test/is (= "a_b" (ql/unkebab "a-b")))
  )

(def vars {"xx" "x x" "yy" 1 "zz" 0.5})
(def table-alias {"table_c" "c" "table_d" "d"})

(test/deftest test-parse-attr
  (test/is (= {:selects [:-attr :?] :params [nil]} (ql/parse-attr nil vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params ["xy z"]} (ql/parse-attr "xy z" vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [""]} (ql/parse-attr "" vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [12]} (ql/parse-attr 12 vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [10.5]} (ql/parse-attr 10.5 vars "table_d" table-alias) ))

  (test/is (= {:selects [:-attr :?] :params ["x x"]} (ql/parse-attr :$xx vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [1]} (ql/parse-attr :$yy vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [0.5]} (ql/parse-attr :$zz vars "table_d" table-alias) ))
  (test/is (= {:selects [:-attr :?] :params [nil]} (ql/parse-attr :$aa vars "table_d" table-alias) ))

    (test/is (= {:selects [:-attr "c" "aa"] :params []} (ql/parse-attr :table_c.aa vars "table_d" table-alias) ))
    (test/is (= {:selects [:-attr "c" "aa"] :params []} (ql/parse-attr :table_c.aa vars "table_c" table-alias) ))
    (test/is (= {:selects [:-attr "d" "aa"] :params []} (ql/parse-attr :table_d.aa vars "table_d" table-alias) ))
    (test/is (= {:selects [:-attr "d" "aa"] :params []} (ql/parse-attr :aa vars "table_d" table-alias) ))
)
(test/deftest test-parse-exp
  (test/is (= {:selects [:empty? [:-attr :?]] :params ["xy z"]}
              (ql/parse-exp [:empty? "xy z"] vars "table_d" table-alias)
              ))
  (test/is (= {:selects [:empty? [:-attr :?]] :params [""]} (ql/parse-exp [:empty? ""] vars "table_d" table-alias) ))
  (test/is (= {:selects [:empty? [:-attr :?]] :params [nil]} (ql/parse-exp [:empty? nil] vars "table_d" table-alias) ))
  (test/is (= {:selects [:gt? [:-attr :?] [:-attr :?]] :params [12 10]} (ql/parse-exp [:gt? 12 10] vars "table_d" table-alias) ))
  (test/is (= {:selects [:le? [:-attr :?] [:-attr :?]] :params [10.5 1]} (ql/parse-exp [:le? 10.5 1] vars "table_d" table-alias) ))
  (test/is (= {:selects [:between? [:-attr "d" "amount"] [:-attr :?] [:-attr :?]] :params [10.5 1]} (ql/parse-exp [:between? :amount 10.5 1] vars "table_d" table-alias) ))

  (test/is (= {:selects [:empty? [:-attr :?]] :params ["x x"]} (ql/parse-exp [:empty? :$xx] vars "table_d" table-alias) ))
  (test/is (= {:selects [:empty? [:-attr :?]] :params [1]} (ql/parse-exp [:empty? :$yy] vars "table_d" table-alias) ))
  (test/is (= {:selects [:gt? [:-attr :?] [:-attr :?]] :params [0.5 1]} (ql/parse-exp [:gt? :$zz :$yy] vars "table_d" table-alias) ))
  (test/is (= {:selects [:eq? [:-attr :?] [:-attr :?]] :params [nil 3]} (ql/parse-exp [:eq? :$aa 3] vars "table_d" table-alias) ))

    (test/is (= {:selects [:empty? [:-attr "c" "aa"]] :params []} (ql/parse-exp [:empty? :table_c.aa] vars "table_d" table-alias) ))
    (test/is (= {:selects [:gt? [:-attr "c" "aa"] [:-attr "d" "aa"]] :params []} (ql/parse-exp [:gt? :table_c.aa :table_d.aa] vars "table_c" table-alias) ))
    (test/is (= {:selects [:empty? [:-attr "d" "aa"]] :params []} (ql/parse-exp [:empty? :table_d.aa] vars "table_d" table-alias) ))
    (test/is (= {:selects [:empty? [:-attr "d" "aa"]] :params []} (ql/parse-exp [:empty? :aa] vars "table_d" table-alias) ))

    (test/is (= {:selects [:empty? [:-attr :?]] :params ["xy z"]} (ql/parse-exp [:empty? ["xy z"]] vars "table_d" table-alias)))
    (test/is (= {:selects [:empty? [:process [:-attr :?]]] :params ["xy z"]} (ql/parse-exp [:empty? [:process "xy z"]] vars "table_d" table-alias)))
    (test/is (= {:selects [:empty? [:process [:item [:-attr :?] ]]] :params ["xy z"]} (ql/parse-exp [:empty? [:process [:item "xy z"]]] vars "table_d" table-alias)))
    )

(test/deftest test-parse-exp->sql
  (test/is (= "? > 0"
              (ql/parsed-exp->sql [:pos? [:-attr :?]])
              ))

  (test/is (= "? <= 0"
              (ql/parsed-exp->sql [:not-pos? [:-attr :?]]) ))

  (test/is (thrown? Exception (ql/parsed-exp->sql [:empty? [:-attr :?]])))

  (test/is (= "? > ?"
              (ql/parsed-exp->sql [:> [:-attr :?] [:-attr :?]]) ))

  (test/is (= "? >= ?"
              (ql/parsed-exp->sql [:>= [:-attr :?] [:-attr :?]]) ))

  (test/is (thrown? Exception
              (ql/parsed-exp->sql [:<< [:-attr :?] [:-attr :?]]) ))

  (test/is (= "d.amount BETWEEN ? AND ?"
              (ql/parsed-exp->sql [:between [:-attr "d" "amount"] [:-attr :?] [:-attr :?]])))

  (test/is (thrown? Exception
              (ql/parsed-exp->sql [:abc [:-attr "d" "amount"] [:-attr :?] [:-attr :?]])))

  (test/is (= "d.amount"
              (ql/parsed-exp->sql [:-attr "d" "amount"])))

  (test/is (= "?"
              (ql/parsed-exp->sql [:-attr :?])))

  (test/is (thrown? Exception
              (ql/parsed-exp->sql [:-attr :? :? :?])))
)

(test/deftest test-parse-query
  (test/is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:lst-id]
              }
             {}
             )))

  (test/is (=
            {
             :selects [[:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "lst" "description"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:lst-id :name :description]
              }
             {}
             )))

  (test/is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr :?] [:-attr :?] [:-attr :?] [:-attr :?] ]
             :params [nil "a b c" 123 nil ""]
             :where {:selects [] :params []}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:$var_1 :lst-id "a b c" 123 nil ""]
              }
             {}
             )))

  (test/is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr :?] [:-attr :?] [:-attr :?] [:-attr :?] ]
             :params [101 "a b c" 123 nil ""]
             :vars {"var_1" 101}
             :where {:selects [] :params []}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
              :args nil
             :attributes [:$var_1 :lst-id "a b c" 123 nil ""]
              }
             {
              :vars {"var_1" 101}
              }
             )))

  (test/is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [] :params []}
             :entity-alias-map {:lst :lst :item :item}
              :vars {"var_1" 101}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
              :args nil
              :attributes [:$var_1 :lst-id {:entity :item :alias nil :args nil :attributes [:lst-id]}]
              }
             {
              :vars {"var_1" 101}
              }
             )))

  (test/is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [[:pos? [:-attr "lst" "lst_id"]]] :params []}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args [[:pos? :lst_id]]
             :attributes [:lst-id]
              }
             {}
             )))

  (test/is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst :lst}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args [[:neg? :lst_id] [:eq? :name "blah"]]
             :attributes [:lst-id]
              }
             {}
             )))

  (test/is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst :lst :item :item}
              :vars {"var_1" 101}
             }

            (ql/parse-query
             {:entity :lst
              :alias nil
              :args [[:neg? :lst_id] [:eq? :name "blah"]]
              :attributes [:$var_1 :lst-id {:entity :item :alias nil :args nil :attributes [:lst-id]}]
              }
             {
              :vars {"var_1" 101}
              }
             )))


  (test/is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]]
                               [:eq? [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]] ]
                     :params ["blah"]}
             :entity-alias-map {:lst :lst :item :item}
              :vars {"var_1" 101}
             }

            (ql/parse-query
             {:entity :lst
              :alias nil
              :args [[:neg? :lst-id] [:eq? :name "blah"]]
              :attributes [:$var_1 :lst-id :name {:entity :item :alias nil :args [[:eq? :lst.lst_id :item.lst_id]] :attributes [:lst-id]}]
              }
             {
              :vars {"var_1" 101}
              }
             )))
  )
