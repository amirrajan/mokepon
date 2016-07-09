(ns mokepon.core-tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.items :as items]
            [mokepon.core :as core]))

(defn make-enemy-attack-ready []
  (swap! (core/app-state)
         update-in [:battling]
         #(assoc % :at rpg/active-turn-threshold)))

(defn reset-game []
  (reset! (core/app-state) rpg/new-game)
  (core/on-take-chipu))

(defn set-cash [amount]
  (swap! (core/app-state) merge {:cash amount}))

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (reset! (core/app-state) rpg/new-game)
  (core/on-take-chipu)
  (core/on-set-battle :chipu mon/sulbabaur)
  (is (some  #{"It has begun! Chipu vs Sulbabaur!"} (:play-by-play @(core/app-state))))
  (make-enemy-attack-ready)
  (core/on-tick-battle-core)
  (is (= (:hp (core/chosen-monster)) 40)))

(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team"
  (reset-game)
  (core/on-set-battle :chipu mon/sulbabaur)
  (swap! (core/app-state) update-in
         [:team (:chosen-key @(core/app-state)) :hp]
         (fn [_] 0))
  (core/remove-dead-team-members)
  (is (= (core/team-count) 0)))

(deftest healing-team
  "anyone with low hp is healed to max"
  (is (= (rpg/heal-team {:chipu {:hp 10 :max-hp 50}
                         :deogude {:hp 5  :max-hp 100}})
         {:chipu {:hp 50   :max-hp 50}
          :deogude {:hp 100  :max-hp 100}})))

(deftest capturing-wild-mokepon
  "attempting to capture wild mokepon decrements mokeboxes"
  (reset-game)
  (set-cash 20)
  (core/on-set-battle :chipu mon/sulbabaur)
  (is (= (core/item-count :mokebox) 0))
  (core/on-throw-mokebox)
  (is (= (core/item-count :mokebox) 0))

  (core/on-buy-item (:mokebox items/store-items-lookup))
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (core/item-count :mokebox) 2))

  ;;capture probability is based on hp of monster
  ;;monsters at full health have 0% of being captured
  (core/on-throw-mokebox)
  (is (= (:sulbabaur (:team @(core/app-state)))
         nil))
  (is (= (core/item-count :mokebox) 1))

  ;;capture probability is based on hp of monster
  ;;setting max-hp to hp ratio really really high
  (swap! (core/app-state) [:battling :max-hp] (fn [_] 100000000))
  (core/on-throw-mokebox)
  (is (= (:sulbabaur (:team @(core/app-state)))
         (:battling @(core/app-state))))
  (is (= (core/item-count :mokebox) 0)))

(deftest battle-is-over-if-mokepon-is-captured
  "capturing a monster ends battle"
  (reset-game)
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (core/on-set-battle :chipu mon/sulbabaur)
  (swap! (core/app-state) [:battling :max-hp] (fn [_] 100000000))
  (core/on-throw-mokebox)
  (is (= (rpg/battle-over? (core/chosen-monster) (:battling @(core/app-state))) true)))

(deftest purchasing-item
  "purchasing item decrements cash"
  (reset-game)
  (swap! (core/app-state) merge {:cash 10})
  (is (= (:cash @(core/app-state)) 10))
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (:cash @(core/app-state)) 0)))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (reset-game)
  (swap! (core/app-state) merge {:cash 0})
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (core/item-count :mokebox) 0))
  (is (= (:cash @(core/app-state)) 0)))

(defn run-tests []
  (.clear js/console)
  (cljs.test/run-all-tests #"mokepon.*-tests"))

(defn main []
  (enable-console-print!)
  (swap! core/current-app-state assoc :value :test)
  (run-tests)
  (swap! core/current-app-state assoc :value :game)
  (core/render!))
