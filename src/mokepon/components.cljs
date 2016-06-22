(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn a [text on-click] [:a {:href "javascript:;" :on-click on-click} text])

(def todo #(.alert js/window "todo"))

(defn section [& elements] [:div elements [:hr]])

(defn team-view [team header]
  (if (not= (count team) 0)
    (section
     [:div header]
     [:ul (for [x team] [:li {:key (:name x)} (:name x)])])))

(defn ask-mommy-view [team team-at-home take-chikapu-handler]
  (if (and (empty? team) (empty? team-at-home))
    (section
     [:p "Your mom feels pity for your sorry ass."]
     [:p "From her extended arm, a Chikapu whimpers, hanging by the scruff of its neck."]
     [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
     (a "Take Chikapu." take-chikapu-handler))))

(defn adventures-view [location team go-to-location-handler]
  (if (not (empty? team))
    [:div
     (section
      [:p "There is a rock face jutting out. It looks freaking scary."]
      (a "Go be awesome in the canyon." #(go-to-location-handler :canyon)))
     (section
      [:p "There is a line of trees off in the distance."]
      (a "Go be awesome in the forest." #(go-to-location-handler :forest)))]))

(defn progress-bar-view [percentage]
  (if (>= percentage 1)
    [:div
     {:style {:background "green"
              :border "solid 1px black"
              :width "100%"
              :height "10px"}}]
    [:div
     {:style {:background (str "linear-gradient(90deg, green, white " (* 100 percentage) "%, white)")
              :border "solid 1px black"
              :width "100%"
              :height "10px"}}]))

(defn battler-view [monster full-active-turn]
  [:div
   [:h2 (str (:name monster) " (hp: " (:hp monster) ")" )]
   [:hr]
   [:p (:battle-text monster)]
   [:hr]
   (progress-bar-view (/ (:at monster) full-active-turn))
   [:hr]])

(defn battle-view [chosen battling full-active-turn]
  [:div
   (battler-view battling full-active-turn)
   (battler-view chosen full-active-turn)
   [:div
    [:a "Attack."]
    [:br]
    [:a "Throw dat ball."]
    [:hr]]
   [:div
    [:div "Chikapu attacked for 10."]
    [:div "Sulbabaur attacked for 10."]
    [:hr]]])

(defn forest-view [team chosen battling go-to-location-handler]
   (if (nil? battling)
     [:div
      (section [:p "You are currently chillin' like a villian in the forest."])
      (team-view team "Your posse:")
      (section
       (a "Go look for some trouble." todo)
       [:br]
       (a "Go home." #(go-to-location-handler :home)))]
     (battle-view chosen battling 1800)))

(defn canyon-view [team battling chosen go-to-location-handler]
  [:div
   (section [:p "You are currently chillin' like a villian in the canyon."])
   (team-view team "Your posse:")
   (section
    (a "Go look for some trouble." todo)
    [:br]
    (a "Go home." #(go-to-location-handler :home)))])

(defn home-view [location
                 team
                 team-at-home
                 take-chikapu-handler
                 go-to-location-handler]
  [:div
   (section [:p "You are currently being worthless at your mother's home."])
   (ask-mommy-view team team-at-home take-chikapu-handler)
   (team-view team-at-home "Chillin' at the crib:")
   (team-view team "Your posse:")
   (adventures-view location team go-to-location-handler)])

(defn title-view []
  (section
   [:h1 {:style {:line-height "0"}} "Moképon"]
   [:h2 {:style {:line-height "0.8" :margin "0"}}"Catching them all just got real, yo"]))

(defn rpg-view [state take-chikapu-handler go-to-location-handler]
  (let [{:keys [location team team-at-home battling chosen]} state]
    [:div
     (title-view)
     (cond
       (= location :home)
       (home-view
        location
        team
        team-at-home
        take-chikapu-handler
        go-to-location-handler)

       (= location :forest)
       (forest-view team chosen battling go-to-location-handler)

       (= location :canyon)
       (canyon-view team chosen battling go-to-location-handler)

       :else
       [:div (str "Location " location "not handled.")])]))
