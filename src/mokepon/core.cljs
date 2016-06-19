(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(def chikapu {:name "Chikapu"})

(def new-game
  {:team-at-home []
   :team []
   :location :home
   :chosen nil
   :battling nil})

(defonce app-state (atom new-game))

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn on-go-to-location [state]
  (fn [loc] (swap! state update-in [:location] (fn [_] loc))))

(defn on-find-trouble [state]
  (cond
    (= (:location @state) :forest)
    (alert "find trouble forest")

    (= (:location @state) :canyon)
    (alert "find trouble forest")))

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
