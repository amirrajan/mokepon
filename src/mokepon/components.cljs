(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn team-view [team
                 header]
  (if (= (count team) 0)
    nil
    (sab/html
     [:div
      [:div header]
      [:ul (for [x team] [:li (:name x)])]])))

(defn ask-mommy-view [team
                      team-at-home
                      take-chikapu-handler]
  (if (and (= (count team) 0) (= (count team-at-home) 0))
    (sab/html
     [:div
      [:p "Your mom feels pity for your sorry ass."]
      [:p "From her extended arm, a Chikapu whimpers, hanging by the scruff of its neck."]
      [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
      [:a {:href "javascript:;"
           :on-click take-chikapu-handler}
       "Take Chikapu."]])
    nil))

(defn adventures-view [location]
  ())

(defn home-view [location
                 team
                 team-at-home
                 take-chikapu-handler]
  (sab/html
   [:div
    [:div "You are currently being worthless at your home."]
    [:hr]
    (ask-mommy-view team team-at-home take-chikapu-handler)
    (team-view team-at-home "Chillin' at the crib:")
    (team-view team "Your posse:")
    (adventures-view location)]))

(defn rpg-view [state take-chikapu-handler]
  (cond
    (= (:location state) "home")
    (home-view
     (:location state)
     (:team state)
     (:team-at-home state)
     take-chikapu-handler)))
