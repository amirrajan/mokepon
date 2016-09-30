(ns mokepon.tests.core
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.container :as tnr]))

(defn state [] @(tnr/app-state))

(defn log [o]
  (.log js/console (clj->js o)))

(defn reset-game []
  (reset! (tnr/app-state) (rpg/new-game))
  (tnr/take-chipu!))

(use-fixtures :each {:before reset-game})

(defn make-enemy-attack-ready []
  (swap! (tnr/app-state)
         assoc-in [:battling :at]
         rpg/active-turn-threshold))

(defn make-chosen-attack-ready []
  (swap! (tnr/app-state)
         assoc-in [:team (:chosen-key (state)) :at]
         rpg/active-turn-threshold))

(defn set-cash [amount]
  (swap! (tnr/app-state) assoc :cash amount))

(defn has-play-by-play [message]
  (is (some  #{message} (:play-by-play (state)))))

(defn get-state [& path]
  (get-in (state) path))

(defn log-state [& path]
  (log (apply get-state path)))

(defn run-tests []
  (.clear js/console)
  (cljs.test/run-all-tests #"mokepon.tests.*"))
