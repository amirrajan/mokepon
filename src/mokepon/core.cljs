(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [like-seymore]]))

(defonce app-state (atom { :likes 0 }))

(defn render! []
  (.render js/React
           (like-seymore app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
