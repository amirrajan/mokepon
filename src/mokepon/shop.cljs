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

(defn shop-buy-messages [item-name]
  [(str "You take the "
        item-name
        " from the midget's saggy, squishy hand. "
        "He smiles and gives you a tip of his top hat.")])

(defn random-shop-buy-message [item-name]
  (let [idx (-> (shop-buy-messages)
                count
                dec
                rand)]
    (.log js/console idx)
    (get (shop-buy-messages) (.floor js/Math idx))))

(defn shop-cant-afford-messages []
  [])
