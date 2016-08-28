(ns xl.lst
  (:require
      [xl.auth :as auth]
      [xl.lst-store :as store]
      [cheshire.core :refer :all]))

(defn get-lsts [owner name]
  (let [
            lsts (store/find-lsts owner name)
            ]
           (generate-string lsts)
           )
      )

(defn get-items [owner lst-name]
  (let [
        result (store/find-items owner lst-name)
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
                               (assoc curr-lsts lst-id new-lst)
                               )
                             ) {} result)
        ]

    {:lsts (or (vals lsts-by-id) []) :user_id owner :is_admin (if (auth/is-admin-user? owner) "true" "false") }
    ))
