(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.items :as itm]
            [mokepon.container :as tnr]))

(defn state [] @(tnr/app-state))

(defn log [o]
  (.log js/console (clj->js o)))

(defn reset-game []
  (reset! (tnr/app-state) rpg/new-game)
  (tnr/on-take-chipu))

(use-fixtures :each {:before reset-game})

(defn make-enemy-attack-ready []
  (swap! (tnr/app-state)
         assoc-in [:battling :at]
         rpg/active-turn-threshold))

(defn set-cash [amount]
  (swap! (tnr/app-state) assoc :cash amount))

(defn has-play-by-play [message]
  (is (some  #{message} (:play-by-play (state)))))

(defn get-state [& path]
  (get-in (state) path))

(defn log-state [& path]
  (log (apply get-state path)))

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (has-play-by-play "It has begun! Chipu vs Sulbabaur!")
  (make-enemy-attack-ready)
  (tnr/on-tick-battle-core)
  (is (= (:hp (tnr/chosen-monster)) 40)))

(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team"
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (swap! (tnr/app-state)
         assoc-in
         [:team (:chosen-key (state)) :hp] 0)
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
  (is (= (get-state :team :sulbabaur)
         nil))
  (is (= (tnr/item-count :mokebox) 1))

  ;;capture probability is based on hp of monster
  ;;setting max-hp to hp ratio really really high
  (swap! (tnr/app-state) assoc-in [:battling :max-hp] 100000000)
  (tnr/on-throw-mokebox)
  (is (= (get-state :team :sulbabaur)
         (dissoc (get-state :battling) :captured)))

  (is (= (tnr/item-count :mokebox) 0)))

(deftest battle-is-over-if-mokepon-is-captured
  "capturing a monster ends battle"
  (tnr/on-buy-item :mokebox)
  (tnr/on-set-battle :chipu mon/sulbabaur)
  ;;since the capture propbablity is based off of current hp
  ;;and max hp, set the max hp to a really large number to
  ;;pretty much gurantee a capture
  (swap! (tnr/app-state) assoc-in [:battling :max-hp] 100000000)
  (tnr/on-throw-mokebox)
  (is (= (rpg/battle-over?
          (get-state :team :chipu)
          (get-state :battling)) true)))

(deftest purchasing-item
  "purchasing item decrements cash"
  (set-cash 10)
  (tnr/on-buy-item :mokebox)
  (is (= (get-state :cash) 0)))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (set-cash 0)
  (tnr/on-buy-item (:mokebox itm/store-items-lookup))
  (is (= (tnr/item-count :mokebox) 0))
  (is (= (get-state :cash) 0)))

(deftest electric-only-does-half-damage-to-grass
  "electric mokepon only do 0.5 damage to grass mokepon"
  (tnr/on-set-battle :chipu mon/sulbabaur)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] rpg/active-turn-threshold)
  (tnr/on-attack)
  (has-play-by-play "Chipu attacks Sulbabaur for 5. It wasn't very effective.")
  (is (= (get-state :battling :hp) 45)))

(deftest ground-mokepon-do-double-damage-to-electric
  (tnr/on-set-battle :chipu mon/deogude)
  (make-enemy-attack-ready)
  (tnr/on-tick-battle-core)
  (has-play-by-play "It has begun! Chipu vs Deogude!")
  (has-play-by-play "Deogude attacks Chipu for 20. It was super effective.")
  (is (= (get-state :team :chipu :hp) 30)))

(deftest ground-mokepon-are-immune-to-electric
  (tnr/on-set-battle :chipu mon/deogude)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (tnr/on-attack)
  (has-play-by-play "Deogude is immune to Chipu's attack. No damage was done.")
  (is (= (get-state :battling :hp) 50)))

(deftest electric-mokepon-do-double-damage-to-water
  (tnr/on-set-battle :chipu mon/tirsqule)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (tnr/on-attack)
  (has-play-by-play "Chipu attacks Tirsqule for 20. It was super effective.")
  (is (= (get-state :battling :hp) 30)))

(deftest water-mokepon-do-normal-damage-to-electric
  (tnr/on-set-battle :chipu mon/tirsqule)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (make-enemy-attack-ready)
  (tnr/on-tick-battle-core)
  (has-play-by-play "Tirsqule attacks Chipu for 10.")
  (is (= (get-state :team :chipu :hp) 40)))

(deftest looking-for-trouble-chooses-first-monster-on-team
  (swap! (tnr/app-state) update-in [:team] #(dissoc % :chipu))
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (tnr/on-go-to-location :forest)
  (tnr/on-find-trouble false)
  (is (= (tnr/chosen-monster) (get-state :team :sulbabaur))))

(defn run-tests []
  (.clear js/console)
  (cljs.test/run-all-tests #"mokepon.tests"))
