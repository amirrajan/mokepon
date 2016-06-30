(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chikapu sulbabaur deogude]]
            [mokepon.rpg :refer [new-game
                                 battle-over?
                                 tick-battle
                                 apply-player-attack
                                 can-attack?]]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(defonce app-state (atom new-game))

(defn on-tick-battle-core [state]
  (swap! state
         merge
         (tick-battle (:chosen @state)
                      (:battling @state)
                      (:play-by-play @state))))

(defn on-tick-battle [state]
  (if (not (battle-over? (:chosen @state) (:battling @state)))
    (do
      (on-tick-battle-core state)
      (.setTimeout js/window #(on-tick-battle state) 250))))

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn on-go-to-location [state]
  (fn [loc] (swap! state update-in [:location] (fn [_] loc))))

(defn on-attack [state]
  (swap! state
         merge
         (apply-player-attack
          (:chosen @state)
          (:battling @state)
          (:play-by-play @state))))

(defn set-battle [state chosen battling]
  (merge state {:chosen chosen :battling battling}))

(defn set-monsters [chosen battling]
  {:chosen chosen
   :battling battling
   :play-by-play [(str "It has begun! " (:name chosen) " vs " (:name battling) "!")]})

(defn on-find-trouble [state]
  (cond
    (= (:location @state) :forest)
    (do
      (swap! state merge (set-monsters chikapu sulbabaur))
      (on-tick-battle state))

    (= (:location @state) :canyon)
    (do
      (swap! state merge (set-monsters chikapu deogude))
      (on-tick-battle state))))

(defn rpg-container []
  (sab/html
   (rpg-view @app-state
             #(on-take-chikapu app-state)
             (on-go-to-location app-state)
             #(on-find-trouble app-state)
             (and (can-attack? (:chosen @app-state))
                  (not (battle-over? (:chosen @app-state) (:battling @app-state))))
             #(on-attack app-state))))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state
           :on-change
           (fn [_ _ _ _] (render!)))

(render!)
