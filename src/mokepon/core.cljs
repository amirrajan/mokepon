(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(def chikapu {:name "Chikapu"})

(def sulbabaur {:name "Sulbabaur"})

(def deogude {:name "Deogude"})

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

(defn set-battle [state chosen battling]
  (merge state {:chosen chosen :battling battling}))

(defn on-find-trouble [state]
  (cond
    (= (:location @state) :forest)
    (swap! app-state merge {:chosen chikapu :battling sulbabaur})

    (= (:location @state) :canyon)
    (swap! app-state merge {:chosen chikapu :battling deogude})))

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
