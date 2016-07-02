(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.core :as core]))

(defn make-enemy-attack-ready []
  (swap! core/app-state
         update-in [:battling]
         #(merge % {:at rpg/active-turn-threshold})))

(defn reset-game []
  (reset! core/app-state rpg/new-game)
  (core/on-take-chikapu))

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (reset! core/app-state rpg/new-game)
  (core/on-take-chikapu)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (is (= (:play-by-play @core/app-state) ["It has begun! Chikapu vs Sulbabaur!"]))
  (make-attack-ready-for :battling)
  (core/on-tick-battle-core)
  (is (= (:hp (core/chosen-monster)) 40)))


(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team."
  (reset-game)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (swap! core/app-state update-in
         [:team (:chosen-key @core/app-state) :hp]
         (fn [_] 0))
  (core/remove-dead-team-members)
  (is (= (core/team-count) 0)))

(enable-console-print!)

(cljs.test/run-tests)

(rpg/is-dead? (core/chosen-monster))
