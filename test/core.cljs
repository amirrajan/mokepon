(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.items :as items]
            [mokepon.core :as core]))

(defn make-enemy-attack-ready []
  (swap! core/app-state
         update-in [:battling]
         #(assoc % :at rpg/active-turn-threshold)))

(defn reset-game []
  (reset! core/app-state rpg/new-game)
  (core/on-take-chikapu))

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (reset! core/app-state rpg/new-game)
  (core/on-take-chikapu)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (is (some  #{"It has begun! Chikapu vs Sulbabaur!"} (:play-by-play @core/app-state)))
  (make-enemy-attack-ready)
  (core/on-tick-battle-core)
  (is (= (:hp (core/chosen-monster)) 40)))

(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team"
  (reset-game)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (swap! core/app-state update-in
         [:team (:chosen-key @core/app-state) :hp]
         (fn [_] 0))
  (core/remove-dead-team-members)
  (is (= (core/team-count) 0)))

(deftest healing-team
  "anyone with low hp is healed to max"
  (is (= (rpg/heal-team {:chikapu {:hp 10 :max-hp 50}
                         :deogude {:hp 5  :max-hp 100}})
         {:chikapu {:hp 50   :max-hp 50}
          :deogude {:hp 100  :max-hp 100}})))

(deftest capturing-wild-mokepon
  "attempting to capture wild mokepon decrements mokeboxes"
  (reset-game)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (is (= (core/item-count :mokebox) 0))
  (core/on-throw-mokebox)
  (is (= (core/item-count :mokebox) 0))
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (core/item-count :mokebox) 1))
  (core/on-throw-mokebox)
  (is (= (core/item-count :mokebox) 0))
  (is (= (:sulbabaur (:team @core/app-state))
         (:battling @core/app-state))))

(deftest purchasing-item
  "purchasing item decrements cash"
  (reset-game)
  (is (= (:cash @core/app-state) 10))
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (:cash @core/app-state) 0)))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (reset-game)
  (swap! core/app-state merge {:cash 0})
  (core/on-buy-item (:mokebox items/store-items-lookup))
  (is (= (core/item-count :mokebox) 0))
  (is (= (:cash @core/app-state) 0)))

(enable-console-print!)

(cljs.test/run-tests)

(:cash @core/app-state)

(reset-game)


(merge {:a 1} {:a 2})
(assoc {:a 1} :a 2)
