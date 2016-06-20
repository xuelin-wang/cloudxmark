(ns cloudxmark.lst
    (:require
      [cloudxmark.lst-store :as store]
      [cheshire.core :refer :all]))

(defn get-lsts [owner name]
  (let [
            lsts (store/find-lsts owner name)
            ]
           (generate-string lsts)
           )
      )

(defn get-items [owner name]
  (let [
        result (store/find-items owner name)
        firstre (println (first result))
        lsts-by-id (reduce (fn [curr-lsts cols]
                             (let [lst-id (:lst_id cols)
                                   lst (if-let [
                                     curr-lst (get curr-lsts lst-id)]
                                         curr-lst
                                   {"lst_id" lst-id "name" (:lst_name cols)
                                        "owner" (:lst_owner cols) "description" (:lst_description cols)
                                        "labels" (:lst_labels cols)
                                        }
                                         )

                                   item (if (nil? (:name cols)) nil
                                   {"lst_id" lst-id "name" (:name cols) "value" (:value cols)
                                         "labels" (:label cols)}
                                          )
                                   new-items (if (nil? item) (:items lst) (conj (:items lst) item) )
                                   new-lst (assoc lst :items new-items)
                                   ]
                               (println (str "results: " result))
                               (println (str "lst-id: " lst-id  ", item: " item ", lst: " lst  ))
                               (assoc curr-lsts lst-id new-lst)
                               )
                             ) {} result)
        ]
    (if-let [the-lsts (vals lsts-by-id)]
           (generate-string (vals lsts-by-id))
      "[]"
      )
           )
      )
