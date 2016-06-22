(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chikapu sulbabaur deogude]]
            [mokepon.rpg :refer [new-game battle-over?]]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(defonce app-state (atom new-game))

(defn on-tick-battle-core [state]
  )

(defn on-tick-battle [state]
  (if (not (battle-over? (:chosen @state) (:battling @state)))
    (on-tick-battle-core [state])))

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn on-go-to-location [state]
  (fn [loc] (swap! state update-in [:location] (fn [_] loc))))

(defn set-battle [state chosen battling]
  (merge state {:chosen chosen :battling battling}))

(defn on-find-trouble [state]
  (cond
    (= (:location @state) :forest)
    (do
      (swap! state merge {:chosen chikapu :battling sulbabaur})
      (on-tick-battle state))

    (= (:location @state) :canyon)
    (do
      (swap! state merge {:chosen chikapu :battling deogude})
      (on-tick-battle state))))

(defn rpg-container []
  (sab/html
   (rpg-view @app-state
             #(on-take-chikapu app-state)
             (on-go-to-location app-state))))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
