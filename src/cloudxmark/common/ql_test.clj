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
  (test/is (= {:selects [:?] :params ["xy z"]} (ql/parse-attr "xy z" vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [""]} (ql/parse-attr "" vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [12]} (ql/parse-attr 12 vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [10.5]} (ql/parse-attr 10.5 vars "table_d" table-alias) ))

  (test/is (= {:selects [:?] :params ["x x"]} (ql/parse-attr :$xx vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [1]} (ql/parse-attr :$yy vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [0.5]} (ql/parse-attr :$zz vars "table_d" table-alias) ))
  (test/is (= {:selects [:?] :params [nil]} (ql/parse-attr :$aa vars "table_d" table-alias) ))

    (test/is (= {:selects ["c" "aa"] :params []} (ql/parse-attr :table_c.aa vars "table_d" table-alias) ))
    (test/is (= {:selects ["c" "aa"] :params []} (ql/parse-attr :table_c.aa vars "table_c" table-alias) ))
    (test/is (= {:selects ["d" "aa"] :params []} (ql/parse-attr :table_d.aa vars "table_d" table-alias) ))
    (test/is (= {:selects ["d" "aa"] :params []} (ql/parse-attr :aa vars "table_d" table-alias) ))
)

(test/deftest test-parse-where
  (test/is (= {:selects [:empty? [:?]] :params ["xy z"]} (ql/parse-where [:empty? "xy z"] vars "table_d" table-alias) ))
  (test/is (= {:selects [:empty? [:?]] :params [""]} (ql/parse-where [:empty? ""] vars "table_d" table-alias) ))
  (test/is (= {:selects [:gt? [:?] [:?]] :params [12 10]} (ql/parse-where [:gt? 12 10] vars "table_d" table-alias) ))
  (test/is (= {:selects [:le? [:?] [:?]] :params [10.5 1]} (ql/parse-where [:le? 10.5 1] vars "table_d" table-alias) ))

  (test/is (= {:selects [:empty? [:?]] :params ["x x"]} (ql/parse-where [:empty? :$xx] vars "table_d" table-alias) ))
  (test/is (= {:selects [:empty? [:?]] :params [1]} (ql/parse-where [:empty? :$yy] vars "table_d" table-alias) ))
  (test/is (= {:selects [:gt? [:?] [:?]] :params [0.5 1]} (ql/parse-where [:gt? :$zz :$yy] vars "table_d" table-alias) ))
  (test/is (= {:selects [:eq? [:?] [:?]] :params [nil 3]} (ql/parse-where [:eq? :$aa 3] vars "table_d" table-alias) ))

    (test/is (= {:selects [:empty? ["c" "aa"]] :params []} (ql/parse-where [:empty? :table_c.aa] vars "table_d" table-alias) ))
    (test/is (= {:selects [:gt? ["c" "aa"] ["d" "aa"]] :params []} (ql/parse-where [:gt? :table_c.aa :table_d.aa] vars "table_c" table-alias) ))
    (test/is (= {:selects [:empty? ["d" "aa"]] :params []} (ql/parse-where [:empty? :table_d.aa] vars "table_d" table-alias) ))
    (test/is (= {:selects [:empty? ["d" "aa"]] :params []} (ql/parse-where [:empty? :aa] vars "table_d" table-alias) ))
)
