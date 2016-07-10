(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.items :as itm]
            [mokepon.container :as tnr]))

(defn state [] @(tnr/app-state))

(defn make-enemy-attack-ready []
  (swap! (tnr/app-state)
         update-in [:battling]
         #(assoc % :at rpg/active-turn-threshold)))

(defn reset-game []
  (reset! (tnr/app-state) rpg/new-game)
  (tnr/on-take-chipu))

(defn set-cash [amount]
  (swap! (tnr/app-state) merge {:cash amount}))

(defn has-play-by-play [message]
  (is (some  #{message} (:play-by-play (state)))))

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (reset-game)
  (tnr/on-take-chipu)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (has-play-by-play "It has begun! Chipu vs Sulbabaur!")
  (make-enemy-attack-ready)
  (tnr/on-tick-battle-core)
  (is (= (:hp (tnr/chosen-monster)) 40)))

(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team"
  (reset-game)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (swap! (tnr/app-state) update-in
         [:team (:chosen-key (state)) :hp]
         (fn [_] 0))
  (tnr/remove-dead-team-members)
  (is (= (tnr/team-count) 0)))

(deftest healing-team
  "anyone with low hp is healed to max"
  (is (= (rpg/heal-team
          {:chipu {:hp 10 :max-hp 50}
           :deogude {:hp 5  :max-hp 100}})
         {:chipu {:hp 50   :max-hp 50}
          :deogude {:hp 100  :max-hp 100}})))

(deftest capturing-wild-mokepon
  "attempting to capture wild mokepon decrements mokeboxes"
  (reset-game)
  (set-cash 20)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (is (= (tnr/item-count :mokebox) 0))
  (tnr/on-throw-mokebox)
  (is (= (tnr/item-count :mokebox) 0))

  ;;buy two mokeboxes
  (tnr/on-buy-item :mokebox)
  (tnr/on-buy-item :mokebox)
  (is (= (tnr/item-count :mokebox) 2))

  ;;capture probability is based on hp of monster
  ;;monsters at full health have 0% of being captured
  (tnr/on-throw-mokebox)
  (is (= (:sulbabaur (:team (state)))
         nil))
  (is (= (tnr/item-count :mokebox) 1))

  ;;capture probability is based on hp of monster
  ;;setting max-hp to hp ratio really really high
  (swap! (tnr/app-state) [:battling :max-hp] (fn [_] 100000000))
  (tnr/on-throw-mokebox)
  (is (= (:sulbabaur (:team (state)))
         (:battling (state))))
  (is (= (tnr/item-count :mokebox) 0)))

(deftest battle-is-over-if-mokepon-is-captured
  "capturing a monster ends battle"
  (reset-game)
  (tnr/on-buy-item :mokebox)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (swap! (tnr/app-state) [:battling :max-hp] (fn [_] 100000000))
  (tnr/on-throw-mokebox)
  (is (= (rpg/battle-over? (tnr/chosen-monster) (:battling (state))) true)))

(deftest purchasing-item
  "purchasing item decrements cash"
  (reset-game)
  (swap! (tnr/app-state) merge {:cash 10})
  (is (= (:cash (state)) 10))
  (tnr/on-buy-item :mokebox)
  (is (= (:cash (state)) 0)))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (reset-game)
  (swap! (tnr/app-state) merge {:cash 0})
  (tnr/on-buy-item (:mokebox itm/store-items-lookup))
  (is (= (tnr/item-count :mokebox) 0))
  (is (= (:cash (state)) 0)))

(deftest electric-only-does-half-damage-to-grass
  "electric mokepon only do 0.5 damage to grass mokepon"
  (reset-game)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (swap! (tnr/app-state) update-in [:team :chipu :at] (fn [_] 1800))
  (tnr/on-attack)
  (is (some  #{"Chipu attacks Sulbabaur for 5. It wasn't very effective."} (:play-by-play (state))))
  (is (= (:hp (:battling (state))) 45)))

(deftest ground-mokepon-do-double-damage-to-electric
  "ground mokepon do double damage to electric"
  (reset! (tnr/app-state) rpg/new-game)
  (tnr/on-take-chipu)
  (tnr/on-set-battle :chipu mon/deogude)
  (make-enemy-attack-ready)
  (tnr/on-tick-battle-core)
  (is (some  #{"It has begun! Chipu vs Deogude!"} (:play-by-play (state))))
  (is (some  #{"Deogude attacks Chipu for 20. It was super effective."} (:play-by-play (state))))
  (is (= (:hp (tnr/chosen-monster)) 30)))

(deftest ground-mokepon-are-immune-to-electric
  "ground mokepon are immune to electric"
  (reset! (tnr/app-state) rpg/new-game)
  (tnr/on-take-chipu)
  (tnr/on-set-battle :chipu mon/deogude)
  (swap! (tnr/app-state) update-in [:team :chipu :at] (fn [_] 1800))
  (tnr/on-attack)
  (is (some  #{"Deogude is immune to Chipu's attack. No damage was done."} (:play-by-play (state))))
  (is (= (get-in (state) [:battling :hp]) 50)))

(defn run-tests []
  (.clear js/console)
  (cljs.test/run-all-tests #"mokepon.tests"))
