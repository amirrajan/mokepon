(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.core :as core]))

(defn make-attack-ready-for [monster-key]
  (swap! core/app-state update-in [monster-key] #(merge % {:at rpg/active-turn-threshold})))

(deftest attacking-monster
  (reset! core/app-state rpg/new-game)
  (core/on-take-chikapu)
  (core/on-set-battle :chikapu mon/sulbabaur)
  (is (= (:play-by-play @core/app-state) ["It has begun! Chikapu vs Sulbabaur!"]))
  (make-attack-ready-for :battling)
  (core/on-tick-battle-core)
  (is (= (:hp (core/chosen-monster)) 40)))

(enable-console-print!)

(cljs.test/run-tests)
