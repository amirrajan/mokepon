(ns mokepon.components
  (:require [sablono.core :as sab]
            [mokepon.views.mokedex :as mokedex]
            [mokepon.views.battle :as battle]
            [mokepon.views.shop :as shop]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(defn team-view [team header empty-text]
  (section
   [:div header]
   (if (empty? team) [:p empty-text])
   [:ul (for [[k v] team]
          [:li {:key (:name v)}
           (str (:name v) " (hp: " (:hp v) "/" (:max-hp v) ")")])]))

(defn adventure-view [description action-text key go-to-location-handler]
  (a  (str action-text) #(go-to-location-handler key)))

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
  (cond
    (nil? battling)
    [:div
     (section [:p location-description])
     (section
      (if (empty? team)
        (disabled-a "Battle")
        (a "Battle" find-trouble-handler))
      (a "Back" #(go-to-location-handler :outside)))]
    :else
    [:div
     (section [:p location-description])
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
                  candy-handler)]))

(defn home-view [team
                 team-at-home
                 take-chipu-handler
                 go-to-location-handler
                 sleep-at-home-handler]
  [:div
   (section [:p "Home"])
   (comment team-view team-at-home "Team at home:" "None")
   (section
    (when (not (:chipu team))
      (a "Take Chipu" take-chipu-handler))
    (a "Sleep"
       sleep-at-home-handler)
    (a "Back" #(go-to-location-handler :outside)))])

(defn message-from []
  {:mom "Mom" :midget "The Midget"})

(defn messages-view [messages go-to-location-handler]
  [:div
   (section [:p "Messages"])
   (section
    [:ul.messages
     (for [m messages] [:li
                        [:div
                         [:span (str ((:from m) (message-from)) ": " (:text m))]
                         [:br]
                         [:span {:style {:font-size :smaller}} "0 day(s) ago"]]])])
   (section (a "Back" #(go-to-location-handler :phone)))])

(defn phone-view [go-to-location-handler view-messages-handler]
  [:div
   (section [:p "Phone"])
   (adventure-view ""
                   "Mokédex"
                   :mokedex
                   go-to-location-handler)
   (adventure-view ""
                   "Messages"
                   :messages
                   view-messages-handler)
   (section (a "Back" #(go-to-location-handler :outside)))])

(defn outside-view [location
                    team
                    go-to-location-handler
                    location-available-handler
                    location-info
                    new-message-count]

  [:div
   (section [:p "Outside"])
   (section
    (adventure-view
     ""
     (if (pos? new-message-count) "Phone: You have new messages." "Phone")
     :phone
     go-to-location-handler)
    (for [loc [:home :shop :canyon :forest :pool]]
      (when (location-available-handler loc)
        (adventure-view
         (:description (loc location-info))
         (:action (loc location-info))
         loc
         go-to-location-handler))))])

(defn title-view []
  (comment section
   [:h1 {:id "title"} "Moképon"]
   [:h2 {:id "tag-line"} "Catching 'em all just got real, yo"]))

(defn status-view [items shop-items-lookup team play-by-play restart-game-handler]
  [:div
   (team-view team "Team:" "None")
   (section
    [:div "Items:"]
    (if (empty? items)
      [:p "None"]
      [:ul (for [[k v] items] [:li (str (:name (k shop-items-lookup))  ": " v)])]))
   (play-by-play-view play-by-play)
   [:a {:style {:font-size :smaller
                :margin 0
                :text-align :center
                :padding 5
                :margin-top "100px"}
        :on-click restart-game-handler
        :href "javascript:;"} "[restart game]" ]])

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
                shop-items
                shop-items-lookup
                buy-item-handler
                throw-mokebox-handler
                choose-monster-handler
                candy-handler
                location-available-handler
                location-info
                shop-item-available-handler
                restart-game-handler
                new-message-count
                view-messages-handler]
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
     [:div {:style {:float "right" :font-weight :bold :font-size :larger}} "Cash: $" cash]
     (cond
       (= location :outside)
       (outside-view location
                     team
                     go-to-location-handler
                     location-available-handler
                     location-info
                     new-message-count)

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

       (= location :shop)
       (shop/view shop-items
                   buy-item-handler
                   go-to-location-handler
                   shop-item-available-handler)

       (= location :phone)
       (phone-view go-to-location-handler view-messages-handler)

       (= location :messages)
       (messages-view messages go-to-location-handler)

       (= location :mokedex)
       (mokedex/view go-to-location-handler mokedex)

       :else
       (section (str "Location " location " not handled.")
                (a "Go back." #(go-to-location-handler :outside))))
     (status-view items shop-items-lookup team play-by-play restart-game-handler)]))
