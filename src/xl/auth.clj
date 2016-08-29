(ns xl.auth
    (:require
      [xl.lst-store :as store]
      )
    (:import java.security.MessageDigest
      java.util.Base64)
    )


(defn- encrypt-pass [pass]
       (let [
             md (MessageDigest/getInstance "SHA-256")
             digest (.digest md (.getBytes pass))
             ]
            (.encodeToString (Base64/getEncoder) digest)
            )
       )

(defn is-admin-user? [user-id]
  (or
    (= user-id "xuelin")
    (= user-id "xuelin.wang@gmail.com"))
  )

(defn add-auth [{:keys [id password description]}]
      (let [
            pass (encrypt-pass password)
            ]
        (println (str "add orig:" password  " encrypted pass:" pass))
           (store/add-auth {:id id :password pass :description description})
           )
      )

(defn login [id pass]
  (println (str "in login id: " id ", noauth:" (store/no-auth?) ",isadmin:" (is-admin-user? id) ))
  (if (store/no-auth?)
    (is-admin-user? id)
    (= (encrypt-pass pass) (store/get-pass id))
;    (add-auth {:id id :password pass :description ""})
    )
      )
