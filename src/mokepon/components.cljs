(ns mokepon.components
  (:require [sablono.core :as sab]
            [mokepon.views.mokedex :as mokedex]
            [mokepon.views.battle :as battle]
            [mokepon.views.store :as store]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(defn team-view [team header empty-text]
  (section
   [:div header]
   (if (empty? team) [:p empty-text])
   [:ul (for [[k v] team]
          [:li {:key (:name v)}
           (str (:name v) " (hp: " (:hp v) "/" (:max-hp v) ")")])]))

(defn ask-mommy-view [team team-at-home take-chipu-handler]
  (when (and (empty? team) (empty? team-at-home))
    (section
     [:p "Your mom feels pity for your sorry ass."]
     [:p "From her extended arm, a Chipu whimpers, hanging by the scruff of its neck."]
     [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
     (a "Take Chipu." take-chipu-handler))))

(defn adventure-view [description action-text key go-to-location-handler]
  (section
   [:p description]
   (a action-text #(go-to-location-handler key))))

(defn play-by-play-view [play-by-play]
  (section (for [i (take 25 (reverse play-by-play))] [:div i])))

(defn location-view [location-description
                     team
                     find-trouble-handler
                     choosable-monsters
                     chosen
                     chosen-can-attack?
                     battle-over?
                     battling
                     go-to-location-handler
                     attack-handler
                     go-to-location-handler
                     active-turn-threshold
                     items
                     throw-mokebox-handler
                     choose-monster-handler
                     candy-handler]
  (if (nil? battling)
    [:div
     (section [:p location-description])
     (section
      (if (empty? team)
        (disabled-a "Go look for some trouble.")
        (a "Go look for some trouble." find-trouble-handler))
      (a "Head back." #(go-to-location-handler :outside)))]
    (battle/view team
                 choosable-monsters
                 chosen
                 chosen-can-attack?
                 battle-over?
                 battling
                 active-turn-threshold
                 attack-handler
                 go-to-location-handler
                 items
                 throw-mokebox-handler
                 choose-monster-handler
                 candy-handler)))

(defn home-view [team
                 team-at-home
                 take-chipu-handler
                 go-to-location-handler
                 sleep-at-home-handler]
  [:div
   (section [:p "You are being worthless at home."])
   (ask-mommy-view team team-at-home take-chipu-handler)
   (team-view team-at-home "Moképon chillin' at the crib:" "None.")
   (section
    (a "Sleep."
       sleep-at-home-handler)
    (a "Head back." #(go-to-location-handler :outside)))])

(defn messages-view [messages go-to-location-handler]
  [:div
   (section [:p "Messages"])
   (section
    [:p "Messages from Mom"]
    [:ul.messages
     [:li
      [:div "Where are you? Have you found a job yet?!" ]
      [:span "one day ago"]]])
   (section (a "Back" #(go-to-location-handler :phone)))])

(defn phone-view [go-to-location-handler]
  [:div
   (section [:p "The soft glow of your phone, oh so nice."])
   (adventure-view "There is an app on your phone called Mokedex."
                   "Open Mokedex."
                   :mokedex
                   go-to-location-handler)
   (adventure-view "Le Messages."
                   "Open Messages."
                   :messages
                   go-to-location-handler)
   (section (a "Put phone away." #(go-to-location-handler :outside)))])

(defn outside-view [location
                    team
                    go-to-location-handler
                    location-available-handler
                    location-info]

    [:div
     (section [:p "You are being worthless outside."])
     [:div (for [loc [:phone :home :store :canyon :forest :pool]]
             (when (location-available-handler loc)
               (adventure-view
                (:description (loc location-info))
                (:action (loc location-info))
                loc
                go-to-location-handler)))]])

(defn title-view []
  (section
   [:h1 {:id "title"} "Moképon"]
   [:h2 {:id "tag-line"} "Catching 'em all just got real, yo"]))

(defn status-view [cash items store-items-lookup team play-by-play]
  [:div
   (team-view team "Your posse:" "No one. Cause you're worthless.")
   (section "Cash: " cash " Ƒiddy")
   (section
    [:div "Items:"]
    (if (empty? items)
      [:p "None. Cause you're worthless."]
      [:ul (for [[k v] items] [:li (str (:name (k store-items-lookup))  ": " v)])]))
   (play-by-play-view play-by-play)])

(defn rpg-view [game-state
                take-chipu-handler
                go-to-location-handler
                find-trouble-handler
                choosable-monsters
                chosen
                chosen-can-attack?
                battle-over?
                attack-handler
                sleep-at-home-handler
                active-turn-threshold
                store-items
                store-items-lookup
                buy-item-handler
                throw-mokebox-handler
                choose-monster-handler
                candy-handler
                location-available-handler
                location-info
                store-item-available-handler]
  (let [{:keys [location
                team
                team-at-home
                battling
                cash
                items
                play-by-play
                mokedex
                messages]} game-state
        top-level-battle-locations [:forest :canyon :pool]]
    [:div
     (title-view)
     (cond
       (= location :outside)
       (outside-view location
                     team
                     go-to-location-handler
                     location-available-handler
                     location-info)

       (some #{location} top-level-battle-locations)
       (location-view (:awesome-text (location location-info))
                      team
                      find-trouble-handler
                      choosable-monsters
                      chosen
                      chosen-can-attack?
                      battle-over?
                      battling
                      go-to-location-handler
                      attack-handler
                      go-to-location-handler
                      active-turn-threshold
                      items
                      throw-mokebox-handler
                      choose-monster-handler
                      candy-handler)

       (= location :home)
       (home-view team
                  team-at-home
                  take-chipu-handler
                  go-to-location-handler
                  sleep-at-home-handler)

       (= location :store)
       (store/view store-items
                   buy-item-handler
                   go-to-location-handler
                   store-item-available-handler)

       (= location :phone)
       (phone-view go-to-location-handler)

       (= location :messages)
       (messages-view messages go-to-location-handler)

       (= location :mokedex)
       (mokedex/view go-to-location-handler mokedex)

       :else
       (section (str "Location " location " not handled.")
                (a "Go back." #(go-to-location-handler :outside))))
     (status-view cash items store-items-lookup team play-by-play)]))
