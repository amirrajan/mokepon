(ns mokepon.tests.affinities
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.tests.core :refer [has-play-by-play get-state make-enemy-attack-ready set-cash make-chosen-attack-ready reset-game]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.container :as tnr]))

(use-fixtures :each {:before reset-game})

(deftest electric-only-does-half-damage-to-grass
  "electric mokepon only do 0.5 damage to grass mokepon"
  (tnr/set-battle! :chipu mon/sulbabaur)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] rpg/active-turn-threshold)
  (tnr/attack!)
  (has-play-by-play "Chipu attacks Sulbabaur for 5. It wasn't very effective.")
  (is (= (get-state :battling :hp) 45)))

(deftest ground-mokepon-do-double-damage-to-electric
  (tnr/set-battle! :chipu mon/deogude)
  (make-enemy-attack-ready)
  (tnr/tick-battle-core!)
  (has-play-by-play "It has begun! Chipu vs Deogude!")
  (has-play-by-play "Deogude attacks Chipu for 20. It was super effective.")
  (is (= (get-state :team :chipu :hp) 30)))

(deftest ground-mokepon-are-immune-to-electric
  (tnr/set-battle! :chipu mon/deogude)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (tnr/attack!)
  (has-play-by-play "Deogude is immune to Chipu's attack. No damage was done.")
  (is (= (get-state :battling :hp) 50)))

(deftest electric-mokepon-do-double-damage-to-water
  (tnr/set-battle! :chipu mon/tirsqule)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (tnr/attack!)
  (has-play-by-play "Chipu attacks Tirsqule for 20. It was super effective.")
  (is (= (get-state :battling :hp) 30)))

(deftest water-mokepon-do-normal-damage-to-electric
  (tnr/set-battle! :chipu mon/tirsqule)
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] 1800)
  (make-enemy-attack-ready)
  (tnr/tick-battle-core!)
  (has-play-by-play "Tirsqule attacks Chipu for 10.")
  (is (= (get-state :team :chipu :hp) 40)))
