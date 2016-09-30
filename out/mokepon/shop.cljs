(ns mokepon.shop)

(defn captured-monsters-gt-eq [monster-count]
  (fn [game-state]
    (>= (count (filter :captured
                       (get-in game-state [:mokedex :monsters])))
                       monster-count)))

(defn shop-items []
  [{:id :mokebox
    :name "Mokébox"
    :cost 10
    :description "Catches Moképon."
    :available-if (fn [_] true)}
   {:id :candy
    :name "Candy"
    :cost 5
    :description "Heals Moképon."
    :available-if (fn [_] true)}
   {:id :battery
    :name "Battery"
    :description "Evolves electric Moképon."
    :cost 25
    :available-if (captured-monsters-gt-eq 4)}])

(defn shop-items-lookup []
  (into {}
        (map (fn [item] [(:id item) item])
             (shop-items))))
