(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn like [state]
  (swap! state update-in [:likes] inc))

(defn like-seymore [state]
  (sab/html [:div
             [:h1 "Mokepon quantified popularity: " (:likes @state)]
             [:div [:a {:href "#"
                        :onClick #(like state)
                        :data-uia "like"}
                    "Thumbs up."]]]))
