(ns cloudxmark.common.ql-test
  (:require
   [clojure.test :refer [deftest is run-tests testing]] ;clojureOnly

    [cloudxmark.common.ql :as ql] )
  )


(deftest test-kebab
  (is (= :a (ql/kebab :a)))
  (is (= :a-b (ql/kebab :a-b)))
  (is (= :a-b (ql/kebab :a_b)))
  (is (= :a (ql/kebab "a")))
  (is (= :1 (ql/kebab "1")))
  (is (= :a-b (ql/kebab "a_b")))
  (is (= :a-b (ql/kebab "a-b")))
  (is (= :-b- (ql/kebab "-b_")))
  (is (= :>- (ql/kebab ">_")))
  )

(deftest test-unkebab
  (is (= "a" (ql/unkebab :a)))
  (is (= ">_" (ql/unkebab :>-)))
  (is (= "a" (ql/unkebab "a")))
  (is (= "a_b" (ql/unkebab :a-b)))
  (is (= "a_b" (ql/unkebab :a_b)))
  (is (= "a_b" (ql/unkebab "a-b")))
  )

(def vars {"xx" "x x" "yy" 1 "zz" 0.5})
(def table-alias {"table_c" "c" "table_d" "d"})

(deftest test-parse-attr
  (is (= {:selects [:-attr :?] :params [nil]} (ql/parse-attr nil vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params ["xy z"]} (ql/parse-attr "xy z" vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [""]} (ql/parse-attr "" vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [12]} (ql/parse-attr 12 vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [10.5]} (ql/parse-attr 10.5 vars "table_d" table-alias) ))

  (is (= {:selects [:-attr :?] :params ["x x"]} (ql/parse-attr :$xx vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [1]} (ql/parse-attr :$yy vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [0.5]} (ql/parse-attr :$zz vars "table_d" table-alias) ))
  (is (= {:selects [:-attr :?] :params [nil]} (ql/parse-attr :$aa vars "table_d" table-alias) ))

    (is (= {:selects [:-attr "c" "aa"] :params []} (ql/parse-attr :c.aa vars "table_d" table-alias) ))
    (is (= {:selects [:-attr "c" "aa"] :params []} (ql/parse-attr :c.aa vars "table_c" table-alias) ))
    (is (= {:selects [:-attr "d" "aa"] :params []} (ql/parse-attr :d.aa vars "table_d" table-alias) ))
    (is (= {:selects [:-attr "d" "aa"] :params []} (ql/parse-attr :aa vars "table_d" table-alias) ))
)
(deftest test-parse-exp
  (is (= {:selects [:empty? [:-attr :?]] :params ["xy z"]}
              (ql/parse-exp [:empty? "xy z"] vars "table_d" table-alias)
              ))
  (is (= {:selects [:empty? [:-attr :?]] :params [""]} (ql/parse-exp [:empty? ""] vars "table_d" table-alias) ))
  (is (= {:selects [:empty? [:-attr :?]] :params [nil]} (ql/parse-exp [:empty? nil] vars "table_d" table-alias) ))
  (is (= {:selects [:gt? [:-attr :?] [:-attr :?]] :params [12 10]} (ql/parse-exp [:gt? 12 10] vars "table_d" table-alias) ))
  (is (= {:selects [:le? [:-attr :?] [:-attr :?]] :params [10.5 1]} (ql/parse-exp [:le? 10.5 1] vars "table_d" table-alias) ))
  (is (= {:selects [:between? [:-attr "d" "amount"] [:-attr :?] [:-attr :?]] :params [10.5 1]} (ql/parse-exp [:between? :amount 10.5 1] vars "table_d" table-alias) ))

  (is (= {:selects [:empty? [:-attr :?]] :params ["x x"]} (ql/parse-exp [:empty? :$xx] vars "table_d" table-alias) ))
  (is (= {:selects [:empty? [:-attr :?]] :params [1]} (ql/parse-exp [:empty? :$yy] vars "table_d" table-alias) ))
  (is (= {:selects [:gt? [:-attr :?] [:-attr :?]] :params [0.5 1]} (ql/parse-exp [:gt? :$zz :$yy] vars "table_d" table-alias) ))
  (is (= {:selects [:eq? [:-attr :?] [:-attr :?]] :params [nil 3]} (ql/parse-exp [:eq? :$aa 3] vars "table_d" table-alias) ))

    (is (= {:selects [:empty? [:-attr "c" "aa"]] :params []} (ql/parse-exp [:empty? :c.aa] vars "table_d" table-alias) ))
    (is (= {:selects [:gt? [:-attr "c" "aa"] [:-attr "d" "aa"]] :params []} (ql/parse-exp [:gt? :c.aa :d.aa] vars "table_c" table-alias) ))
    (is (= {:selects [:empty? [:-attr "d" "aa"]] :params []} (ql/parse-exp [:empty? :d.aa] vars "table_d" table-alias) ))
    (is (= {:selects [:empty? [:-attr "d" "aa"]] :params []} (ql/parse-exp [:empty? :aa] vars "table_d" table-alias) ))

    (is (= {:selects [:empty? [:-attr :?]] :params ["xy z"]} (ql/parse-exp [:empty? ["xy z"]] vars "table_d" table-alias)))
    (is (= {:selects [:empty? [:process [:-attr :?]]] :params ["xy z"]} (ql/parse-exp [:empty? [:process "xy z"]] vars "table_d" table-alias)))
    (is (= {:selects [:empty? [:process [:item [:-attr :?] ]]] :params ["xy z"]} (ql/parse-exp [:empty? [:process [:item "xy z"]]] vars "table_d" table-alias)))
    )

(deftest test-parse-exp->sql
  (is (= "? > 0"
              (ql/parsed-exp->sql [:pos? [:-attr :?]] nil)
              ))

  (is (= "? <= 0"
              (ql/parsed-exp->sql [:not-pos? [:-attr :?]] nil) ))

  (is (thrown? Exception (ql/parsed-exp->sql [:empty? [:-attr :?]] nil))) ;clojureOnly


  (is (= "? > ?"
              (ql/parsed-exp->sql [:> [:-attr :?] [:-attr :?]] nil) ))

  (is (= "? >= ?"
              (ql/parsed-exp->sql [:>= [:-attr :?] [:-attr :?]] nil) ))

  (is (thrown? Exception (ql/parsed-exp->sql [:<< [:-attr :?] [:-attr :?]] nil) )) ;clojureOnly


  (is (= "d.amount BETWEEN ? AND ?"
              (ql/parsed-exp->sql [:between [:-attr "d" "amount"] [:-attr :?] [:-attr :?]] nil)))
  (is (= "amount BETWEEN ? AND ?"
         (ql/parsed-exp->sql [:between [:-attr "d" "amount"] [:-attr :?] [:-attr :?]] "d")))

  (is (thrown? Exception (ql/parsed-exp->sql [:abc [:-attr "d" "amount"] [:-attr :?] [:-attr :?]] nil))) ;clojureOnly


  (is (= "d.amount"
              (ql/parsed-exp->sql [:-attr "d" "amount"] nil)))
  (is (= "amount"
         (ql/parsed-exp->sql [:-attr "d" "amount"] "d")))

  (is (= "?"
         (ql/parsed-exp->sql [:-attr :?] nil)))
  (is (= "?"
              (ql/parsed-exp->sql [:-attr :?] "d")))

  (is (thrown? Exception (ql/parsed-exp->sql [:-attr :? :? :?] nil)))  ;clojureOnly

)

(deftest test-parse-query
  (is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             :vars {}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:lst-id]
              }
             {}
             )))

  (is (=
            {
             :selects [[:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "lst" "description"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             :vars {}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:lst-id :name :description]
              }
             {}
             )))

  (is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr :?] [:-attr :?] [:-attr :?] [:-attr :?] ]
             :params [nil "a b c" 123 nil ""]
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             :vars {}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args nil
             :attributes [:$var_1 :lst-id "a b c" 123 nil ""]
              }
             {}
             )))

  (is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr :?] [:-attr :?] [:-attr :?] [:-attr :?] ]
             :params [101 "a b c" 123 nil ""]
             :vars {"var_1" 101}
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
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

  (is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst" :item "item"}
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

  (is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [[:pos? [:-attr "lst" "lst_id"]]] :params []}
             :entity-alias-map {:lst "lst"}
             :vars {}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args [[:pos? :lst_id]]
             :attributes [:lst-id]
              }
             {}
             )))

  (is (=
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst"}
             :vars {}
             }

            (ql/parse-query
             {:entity :lst
             :alias nil
             :args [[:neg? :lst_id] [:eq? :name "blah"]]
             :attributes [:lst-id]
              }
             {}
             )))

  (is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst" :item "item"}
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


  (is (=
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:eq? [:-attr "lst" "name"] [:-attr :?]]
                               [:eq? [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]] ]
                     :params ["blah"]}
             :entity-alias-map {:lst "lst" :item "item"}
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

(deftest test-parsed-query->sql-params
  (is (=
       [
        (str
             "SELECT lst.lst_id"
             " FROM lst lst"
             )
        []
        ]

            (ql/parsed-query->sql-params
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       [
        (str
             "SELECT lst.lst_id, lst.name, lst.description"
             " FROM lst lst"
             )
        []
        ]


            (ql/parsed-query->sql-params
            {
             :selects [[:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "lst" "description"]]
             :params []
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       [
        (str
             "SELECT ?, lst.lst_id, ?, ?, ?, ?"
             " FROM lst lst"
             )
        [nil "a b c" 123 nil ""]
        ]

            (ql/parsed-query->sql-params
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr :?] [:-attr :?] [:-attr :?] [:-attr :?] ]
             :params [nil "a b c" 123 nil ""]
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst"}
             }
             )))


  (is (=
       [
    (str
             "SELECT ?, lst.lst_id, item.lst_id"
             " FROM lst lst, item item"
             )
    [101]
        ]

            (ql/parsed-query->sql-params
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [] :params []}
             :entity-alias-map {:lst "lst" :item "item"}
              :vars {"var_1" 101}
             }
             )))


  (is (=
       [
                    (str
             "SELECT lst.lst_id"
             " FROM lst lst"
             " WHERE lst.lst_id < 0 AND lst.name = ?"
             )
                    ["blah"]
        ]

            (ql/parsed-query->sql-params
            {
             :selects [[:-attr "lst" "lst_id"]]
             :params []
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:= [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       [
                    (str
             "SELECT ?, lst.lst_id, item.lst_id"
             " FROM lst lst, item item"
             " WHERE lst.lst_id < 0 AND lst.name = ?"
             )
                    [101 "blah"]
        ]


            (ql/parsed-query->sql-params
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:= [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst" :item "item"}
              :vars {"var_1" 101}
             }
             )))


  (is (=
       [
        (str
             "SELECT ?, lst.lst_id, lst.name, item.lst_id"
             " FROM lst lst, item item"
             " WHERE lst.lst_id < 0 AND lst.name = ? AND lst.lst_id = item.lst_id"
             )
        [101 "blah"]
        ]

            (ql/parsed-query->sql-params
            {
             :selects [[:-attr :?] [:-attr "lst" "lst_id"] [:-attr "lst" "name"] [:-attr "item" "lst_id"]]
             :params [101]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:= [:-attr "lst" "name"] [:-attr :?]]
                               [:= [:-attr "lst" "lst_id"] [:-attr "item" "lst_id"]] ]
                     :params ["blah"]}
             :entity-alias-map {:lst "lst" :item "item"}
              :vars {"var_1" 101}
             }
             )))
  )

(deftest test-parsed-insert->sql-params

  (is (thrown? Exception (ql/parsed-ql->sql-params ;clojureOnly
        :insert ;clojureOnly
        :lst ;clojureOnly
            { ;clojureOnly
             :selects [[:-attr "lst" "lst_id"]] ;clojureOnly
             :params [] ;clojureOnly
             :where {:selects [] :params []} ;clojureOnly
             :entity-alias-map {:lst "lst"} ;clojureOnly
             } ;clojureOnly
            ))) ;clojureOnly













  (is (=
       [
        (str
             "INSERT INTO lst (lst_id, name) VALUES (?, ?)")
        [1, "name 1"]
        ]

       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "lst" :lst-id] [:-attr :?]] [:= [:-attr "lst" :name] [:-attr :?]]]
             :params [1, "name 1"]
             :where {}
             :entity-alias-map {:lst "lst"}
             }
            )))

  (is (=
       ["INSERT INTO lst (lst_id) VALUES (?)"
        [1]
        ]

       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "lst" :lst-id] [:-attr :?]]]
             :params [1]
             :where {}
             :entity-alias-map {:lst "lst"}
             }
            )))

  (is (=
       ["INSERT INTO lst (lst_id) SELECT MAX(l.lst_id) + ? FROM lst l WHERE ?"
        [1 true]
        ]

       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "l" :lst-id] [:+ [:max [:-attr "l" :lst-id]] [:-attr :?]]]]
             :params [1]
             :where {:selects [[:-attr :?]] :params [true]}
             :entity-alias-map {:lst "l"}
             }
             )))

  (is (=
       [ "INSERT INTO lst (name, lst_id) VALUES (?, ?)"
        ["a b c" 123]
        ]
       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "l" :name] [:-attr :?] ] [:= [:-attr "l" "lst_id"] [:-attr :?]]]
             :params ["a b c" 123]
             :where {}
             :entity-alias-map {:lst "l"}
             }
             )))

  (is (=
       ["INSERT INTO lst (lst_id, name) SELECT ?, l.name FROM lst l WHERE l.lst_id < 0 AND l.name = ?"
                    [11, "blah"]
        ]
       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "l" "lst_id"] [:-attr :?] ] [:= [:-attr "l" "name"] [:-attr "l" "name"]] ]
             :params [11]
             :where {:selects [[:neg? [:-attr "l" "lst_id"]] [:= [:-attr "l" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "l"}
             }
             )))

  (is (=
       ["INSERT INTO lst (lst_id, name) SELECT l.lst_id, i.name FROM lst l, item i WHERE l.lst_id = i.lst_id AND l.lst_id < 0 AND l.name = ?"
            ["blah"]
        ]

       (ql/parsed-ql->sql-params
        :insert
        :lst
            {
             :selects [[:= [:-attr "l" "lst_id"] [:-attr "l" "lst_id"]] [:= [:-attr "l" "name"] [:-attr "i" "name"]]]
             :params []
             :where {:selects [[:= [:-attr "l" "lst_id"] [:-attr "i" "lst_id"]] [:neg? [:-attr "l" "lst_id"]] [:= [:-attr "l" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "l" :item "i"}
              :vars {"var_1" 101}
             }
             )))
  )

(deftest test-parsed-update->sql-params

  (is (thrown? Exception (ql/parsed-ql->sql-params ;clojureOnly
        :update ;clojureOnly
        :lst ;clojureOnly
            { ;clojureOnly
             :selects [[:-attr "lst" "lst_id"]] ;clojureOnly
             :params [] ;clojureOnly
             :where {:selects [] :params []} ;clojureOnly
             :entity-alias-map {:lst "lst"} ;clojureOnly
             } ;clojureOnly
            ))) ;clojureOnly













  (is (=
       [
        (str
             "UPDATE lst SET lst_id = ?, name = ?")
        [1, "name 1"]
        ]

       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" :lst-id] [:-attr :?]] [:= [:-attr "lst" :name] [:-attr :?]]]
             :params [1, "name 1"]
             :where {}
             :entity-alias-map {:lst "lst"}
             }
            )))

  (is (=
       ["UPDATE lst SET lst_id = ?"
        [1]
        ]

       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" :lst-id] [:-attr :?]]]
             :params [1]
             :where {}
             :entity-alias-map {:lst "lst"}
             }
            )))

  (is (=
       ["UPDATE lst SET lst_id = lst.lst_id + ? WHERE lst.lst_id = ?"
        [100 2]
        ]

       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" :lst-id] [:+ [:-attr "lst" :lst-id] [:-attr :?]]]]
             :params [100]
             :where {:selects [[:= [:-attr "lst" :lst-id] [:-attr :?]]]  :params [2]}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       [ "UPDATE lst SET name = ?, lst_id = ?"
        ["a b c" 123]
        ]
       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" :name] [:-attr :?] ] [:= [:-attr "lst" "lst_id"] [:-attr :?]]]
             :params ["a b c" 123]
             :where {}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       ["UPDATE lst SET lst_id = ?, description = lst.name WHERE lst.lst_id < 0 AND lst.name = ?"
                    [11, "blah"]
        ]
       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" "lst_id"] [:-attr :?] ] [:= [:-attr "lst" "description"] [:-attr "lst" "name"]] ]
             :params [11]
             :where {:selects [[:neg? [:-attr "lst" "lst_id"]] [:= [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst"}
             }
             )))

  (is (=
       ["UPDATE lst SET lst_id = lst.lst_id + ?, name = i.name FROM item i WHERE lst.lst_id = i.lst_id AND lst.lst_id < 0 AND lst.name = ?"
            [1, "blah"]
        ]

       (ql/parsed-ql->sql-params
        :update
        :lst
            {
             :selects [[:= [:-attr "lst" "lst_id"] [:+ [:-attr "lst" "lst_id"] [:-attr :?] ]] [:= [:-attr "lst" "name"] [:-attr "i" "name"]]]
             :params [1]
             :where {:selects [[:= [:-attr "lst" "lst_id"] [:-attr "i" "lst_id"]] [:neg? [:-attr "lst" "lst_id"]] [:= [:-attr "lst" "name"] [:-attr :?]] ] :params ["blah"]}
             :entity-alias-map {:lst "lst" :item "i"}
              :vars {"var_1" 101}
             }
             )))
  )
