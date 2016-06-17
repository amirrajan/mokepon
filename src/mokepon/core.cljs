(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [rpg-container]]))

(defonce app-state (atom {:team []}))

(defn render! []
  (.render js/React
           (rpg-container app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
