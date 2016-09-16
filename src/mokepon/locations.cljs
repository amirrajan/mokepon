(ns mokepon.locations
  (:require [mokepon.monsters :as monsters]))

(def location-monsters
  {:forest monsters/sulbabaur
   :canyon monsters/deogude
   :pool   monsters/tirsqule})

(defn captured-monsters-gt-eq [monster-count]
  (fn [game-state]
    (>= (count (filter :captured
                       (get-in game-state [:mokedex :monsters])))
                       monster-count)))

(defn location-info []
  {:phone  {:description ""
            :action "Phone"
            :available-if (fn [_] true)}
   :home   {:description ""
            :action "Home"
            :available-if (fn [_] true)}
   :shop  {:description ""
            :action "Shop"
            :awesome-text "Hodor"
            :available-if (captured-monsters-gt-eq 1)}
   :canyon {:description "Canyon"
            :action "Canyon"
            :awesome-text "Canyon"
            :available-if (captured-monsters-gt-eq 1)}
   :forest {:description "Forest"
            :action "Forest"
            :awesome-text "Forest"
            :available-if (captured-monsters-gt-eq 1)}
   :pool   {:description "Lake"
            :action "Lake"
            :awesome-text "Lake"
            :available-if (captured-monsters-gt-eq 1)}})
