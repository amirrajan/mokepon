(ns mokepon.locations
  (:require [mokepon.monsters :as monsters]))

(def location-monsters
  {:forest monsters/sulbabaur
   :canyon monsters/deogude
   :pool   monsters/tirsqule})

(defn captured-monsters-gt-eq [monster-count]
  (fn [game-state] (>= (count (filter :captured (get-in game-state [:mokedex :monsters])))
                       monster-count)))

(def locations
  {:phone  {:description "Your smart phone bulges from your skinny jeans."
            :action "Bust out phone."
            :available-if (fn [_] true)}
   :home   {:description "Your mother's home stands in the distance. Smoke bellows from the chimney."
            :action "Go home."
            :available-if (fn [_] true)}
   :store  {:description "There is a Moképon store with a half working neon sign flashing. Looks kinda shady."
            :action "Go shop."
            :available-if (captured-monsters-gt-eq 1)}
   :canyon {:description "There is a rock face jutting out. It looks freaking scary."
            :action "Go be awesome in the canyon."
            :available-if (captured-monsters-gt-eq 1)}
   :forest {:description "There is a line of trees off in the distance."
            :action "Go be awesome in the forest."
            :available-if (captured-monsters-gt-eq 1)}
   :pool   {:description "The neighborhood pool hasn't been cleaned in a while. Smells like poop."
            :action "Go be awesome in the pool."
            :available-if (captured-monsters-gt-eq 1)}})
