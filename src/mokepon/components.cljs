(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn team-view [team header]
  (if (not= (count team) 0)
    [:div
     [:div header]
     [:ul (for [x team] [:li {:key (:name x)} (:name x)])]
     [:hr]]))

(defn ask-mommy-view [team
                      team-at-home
                      take-chikapu-handler]
  (if (and (empty? team) (empty? team-at-home))
    [:div
     [:p "Your mom feels pity for your sorry ass."]
     [:p "From her extended arm, a Chikapu whimpers, hanging by the scruff of its neck."]
     [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
     [:a {:href "javascript:;" :on-click take-chikapu-handler} "Take Chikapu."]]))

(defn adventures-view [location team go-to-location-handler]
  (if (not (empty? team))
    [:div
     [:div
      [:p "There is a rock face jutting out. It looks freaking scary."]
      [:a {:href "javascript:;"
           :on-click #(go-to-location-handler :canyon)}
       "Go be awesome in the canyon."]
      [:hr]]
     [:div
      [:p "There is a line of trees off in the distance."]
      [:a {:href "javascript:;"
           :on-click #(go-to-location-handler :forest)}
       "Go be awesome in the forest."]
      [:hr]]]))

(defn forest-view [team go-to-location-handler]
  [:div
   [:p "You are currently being awesome in the forest."]
   [:hr]
   (team-view team "Your posse:")
   [:a {:href "javascript:;" :on-click #(go-to-location-handler :home)} "Go look for some trouble."]
   [:br]
   [:a {:href "javascript:;" :on-click #(go-to-location-handler :home)} "Go home."]
   [:hr]])

(defn canyon-view [team go-to-location-handler]
  [:div
   [:p "You are currently being awesome in the canyon."]
   [:hr]
   (team-view team "Your posse:")
   [:a {:href "javascript:;" :on-click #(go-to-location-handler :home)} "Go look for some trouble."]
   [:br]
   [:a {:href "javascript:;" :on-click #(go-to-location-handler :home)} "Go home."]
   [:hr]])

(defn home-view [location
                 team
                 team-at-home
                 take-chikapu-handler
                 go-to-location-handler]
  [:div
   [:div "You are currently being worthless at your home."]
   [:hr]
   (ask-mommy-view team team-at-home take-chikapu-handler)
   (team-view team-at-home "Chillin' at the crib:")
   (team-view team "Your posse:")
   (adventures-view location team go-to-location-handler)])

(defn rpg-view [state take-chikapu-handler go-to-location-handler]
  (cond
    (= (:location state) :home)
    (home-view
     (:location state)
     (:team state)
     (:team-at-home state)
     take-chikapu-handler
     go-to-location-handler)

    (= (:location state) :forest)
    (forest-view (:team state)
                 go-to-location-handler)

    (= (:location state) :canyon)
    (canyon-view (:team state)
                 go-to-location-handler)

    :else
    [:div "else"]))
