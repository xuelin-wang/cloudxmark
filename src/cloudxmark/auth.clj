(ns cloudxmark.auth
    (:require
      [cloudxmark.lst-store :as store]
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

(defn add-auth [auth]
      (let [
            id (auth :id)
            pass (encrypt-pass (auth :password))
            desc (auth :description)
            ]
           (store/add-auth {:id id :password pass :description desc})
           )
      )

(defn login [id pass]
  (if (store/no-auth?)
    (add-auth {:id id :password pass :description ""}))
      (= (encrypt-pass pass) (store/get-pass id))
      )
