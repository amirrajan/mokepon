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
    :description "Use this to catch Moképon."
    :available-if (fn [_] true)}
   {:id :candy
    :name "Candy"
    :cost 5
    :description "Use this to heal Moképon."
    :available-if (fn [_] true)}
   {:id :battery
    :name "Battery"
    :description "Use this to evolve Electric Moképon by sticking it up their rectum."
    :cost 25
    :available-if (captured-monsters-gt-eq 4)}])

(defn shop-items-lookup []
  (into {}
        (map (fn [item] [(:id item) item])
             (shop-items))))
