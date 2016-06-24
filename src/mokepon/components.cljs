(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn a [text on-click]
  [:a {:href "javascript:;" :on-click on-click} text])

(defn disabled-a [text]
  [:a {:href "javascript:;" :style {:color "#a0a0a0" :cursor "default"}} text])

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
  [:div
   {:style {:border "solid 1px black"
            :width "100%"
            :height "10px"}}
   [:div
    {:style {:background "green"
             :margin "0px"
             :padding "0px"
             :width (str (* 100 percentage) "%")
             :height "100%"}}]])

(defn battler-view [monster full-active-turn]
  [:div
   [:h2 (str (:name monster) " (hp: " (:hp monster) ")" )]
   [:hr]
   [:p (:battle-text monster)]
   [:hr]
   (progress-bar-view (/ (:at monster) full-active-turn))
   [:hr]])

(defn battle-view [chosen chosen-can-attack? battling play-by-play active-turn-threshold attack-handler]
  [:div
   (battler-view battling active-turn-threshold)
   (battler-view chosen active-turn-threshold)
   (if chosen-can-attack?
     (section
      (a "Attack!" attack-handler)
      [:br])
     (section
      (disabled-a "Attack!")
      [:br]))
   (section (for [i play-by-play] [:div i]))])

(defn location-view [location-description
                     team
                     find-trouble-handler
                     chosen
                     chosen-can-attack?
                     battling
                     play-by-play
                     go-to-location-handler
                     attack-handler]
  (if (nil? battling)
    [:div
     (section [:p location-description])
     (team-view team "Your posse:")
     (section
      (a "Go look for some trouble." find-trouble-handler)
      [:br]
      (a "Go home." #(go-to-location-handler :home)))]
    (battle-view chosen chosen-can-attack? battling play-by-play 1800 attack-handler)))

(defn forest-view [team
                   find-trouble-handler
                   chosen
                   chosen-can-attack?
                   battling
                   play-by-play
                   go-to-location-handler
                   attack-handler]
  (location-view
   "You are currently chillin' like a villian in the forest."
   team
   find-trouble-handler
   chosen
   chosen-can-attack?
   battling
   play-by-play
   go-to-location-handler
   attack-handler))

(defn canyon-view [team
                   find-trouble-handler
                   chosen
                   chosen-can-attack?
                   battling
                   play-by-play
                   go-to-location-handler
                   attack-handler]
  (location-view
   "You are currently chillin' like a villian in the canyon."
   team
   find-trouble-handler
   chosen
   chosen-can-attack?
   battling
   play-by-play
   go-to-location-handler
   attack-handler))

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
   [:h2 {:style {:line-height "0.8" :margin "0"}}"Catching 'em all just got real, yo"]))

(defn rpg-view [state
                take-chikapu-handler
                go-to-location-handler
                find-trouble-handler
                can-attack?
                attack-handler]
  (let [{:keys [location team team-at-home battling chosen play-by-play]} state
        chosen-can-attack? (can-attack? chosen)]
    [:div
     (title-view)
     (cond
       (= location :home)
       (home-view location
                  team
                  team-at-home
                  take-chikapu-handler
                  go-to-location-handler)

       (= location :forest)
       (forest-view team
                    find-trouble-handler
                    chosen chosen-can-attack?
                    battling
                    play-by-play
                    go-to-location-handler
                    attack-handler)

       (= location :canyon)
       (canyon-view team
                    find-trouble-handler
                    chosen
                    chosen-can-attack?
                    battling
                    play-by-play
                    go-to-location-handler
                    attack-handler)

       :else
       [:div (str "Location " location "not handled.")])]))
