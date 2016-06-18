(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [rpg-view]]))

(def chikapu {:name "Chikapu"})

(def new-game
  {:team-at-home []
   :team []
   :location "home"})

(defonce app-state (atom new-game))

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn rpg-container []
 (rpg-view @app-state on-take-chikapu))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
