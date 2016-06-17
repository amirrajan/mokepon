(ns mokepon.components
  (:require [sablono.core :as sab]))

(def chikapu {:name "Chikapu"})

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn team-view [team]
  (if (= (count team) 0)
    nil
    (sab/html
     [:div
      [:div "Your posse:"]
      [:ul [:li "Chikapu"]]])))

(defn ask-mommy-view [team take-chikapu-handler]
  (if (not= (count team) 0)
    nil
    (sab/html
     [:div
      [:p "Your mom feels pity for your sorry ass."]
      [:p "From her extended arm, a Chikapu whimpers, hanging by the scruff of its neck."]
      [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
      [:a {:href "javascript:;"
           :on-click take-chikapu-handler}
       "Take Chikapu."]])))

(defn home-view [team take-chikapu-handler]
  (sab/html
   [:div
    [:div "You are currently being worthless at your home."]
    [:hr]
    (ask-mommy-view team take-chikapu-handler)
    (team-view team)]))

(defn rpg-container [state]
  (home-view (:team @state) #(on-take-chikapu state)))
