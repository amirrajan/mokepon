(ns mokepon.components
  (:require [sablono.core :as sab]))

(defn a [text on-click]
  [:a {:href "javascript:;" :on-click on-click} text])

(defn disabled-a [text]
  [:a {:href "javascript:;" :style {:color "#a0a0a0" :cursor "default"}} text])

(def todo #(.alert js/window "todo"))

(defn section [& elements] [:div elements [:hr]])

(defn team-view [team header]
  (if (not (empty? team))
    (section
     [:div header]
     [:ul (for [[k v] team]
            [:li {:key (:name v)}
             (str (:name v) " (hp: " (:hp v) "/" (:max-hp v) ")")])])))

(defn ask-mommy-view [team team-at-home take-chikapu-handler]
  (if (and (empty? team) (empty? team-at-home))
    (section
     [:p "Your mom feels pity for your sorry ass."]
     [:p "From her extended arm, a Chikapu whimpers, hanging by the scruff of its neck."]
     [:p "\"Make something of yourself, you worthless millenial!\" she says to you."]
     (a "Take Chikapu." take-chikapu-handler))))

(defn adventure-view [description action-text key go-to-location-handler]
  (section
   [:p description]
   (a action-text #(go-to-location-handler key))))

(defn adventures-view [location team go-to-location-handler]
  [:div
   (adventure-view
    "Your mother's home stands in the distance. Smoke bellows from the chimney."
    "Go home."
    :home
    go-to-location-handler)
   (adventure-view
    "There is a rock face jutting out. It looks freaking scary."
    "Go be awesome in the canyon."
    :canyon
    go-to-location-handler)
   (adventure-view
    "There is a line of trees off in the distance."
    "Go be awesome in the forest."
    :forest
    go-to-location-handler)
   (adventure-view
    "There is a Moképon store with a half working neon sign flashing. Looks kinda shady."
    "Go shop."
    :store
    go-to-location-handler)])

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
  (section
   [:h2 (str (:name monster) " (hp: " (:hp monster) ")" )]
   [:hr]
   [:p (:battle-text monster)]
   [:hr]
   (progress-bar-view (/ (:at monster) full-active-turn))))

(defn battle-view [chosen
                   chosen-can-attack?
                   battle-over?
                   battling play-by-play
                   active-turn-threshold
                   attack-handler
                   go-to-location-handler]
  [:div
   (battler-view battling active-turn-threshold)
   (battler-view chosen active-turn-threshold)
   (cond
     battle-over?
     (section
      (disabled-a "Attack!")
      (a "Head back." #(go-to-location-handler :outside)))

     chosen-can-attack?
     (section (a "Attack!" attack-handler))

     :else
     (section (disabled-a "Attack!")))
   (section (for [i play-by-play] [:div i]))])

(defn location-view [location-description
                     team
                     find-trouble-handler
                     chosen
                     chosen-can-attack?
                     battle-over?
                     battling
                     play-by-play
                     go-to-location-handler
                     attack-handler
                     go-to-location-handler
                     active-turn-threshold]
  (if (nil? battling)
    [:div
     (section [:p location-description])
     (section
      (if (empty? team)
        (disabled-a "Go look for some trouble.")
        (a "Go look for some trouble." find-trouble-handler))
      (a "Head back." #(go-to-location-handler :outside)))]
    (battle-view chosen
                 chosen-can-attack?
                 battle-over?
                 battling
                 play-by-play
                 active-turn-threshold
                 attack-handler
                 go-to-location-handler)))

(defn forest-view [team
                   find-trouble-handler
                   chosen
                   chosen-can-attack?
                   battle-over?
                   battling
                   play-by-play
                   go-to-location-handler
                   attack-handler
                   active-turn-threshold]
  (location-view
   "You are currently chillin' like a villian in the forest."
   team
   find-trouble-handler
   chosen
   chosen-can-attack?
   battle-over?
   battling
   play-by-play
   go-to-location-handler
   attack-handler
   go-to-location-handler
   active-turn-threshold))

(defn canyon-view [team
                   find-trouble-handler
                   chosen
                   chosen-can-attack?
                   battle-over?
                   battling
                   play-by-play
                   go-to-location-handler
                   attack-handler
                   active-turn-threshold]
  (location-view
   "You are currently chillin' like a villian in the canyon."
   team
   find-trouble-handler
   chosen
   chosen-can-attack?
   battle-over?
   battling
   play-by-play
   go-to-location-handler
   attack-handler
   go-to-location-handler
   active-turn-threshold))

(defn home-view [team
                 team-at-home
                 take-chikapu-handler
                 go-to-location-handler
                 sleep-at-home-handler]
  [:div
   (section [:p "You are being worthless at home."])
   (ask-mommy-view team team-at-home take-chikapu-handler)
   (team-view team-at-home "Chillin' at the crib:")
   (section
    (a "Sleep. Cause you're a lazy worthless millenial." sleep-at-home-handler)
    (a "Head back." #(go-to-location-handler :outside)))])

(defn store-view [store-items buy-item-handler go-to-location-handler]
  (section
   [:p (str "You walk into the store. A midget stands behind the counter on a stool. "
            "He occasionally props himself up with locked arms and dangles his feet in the air.")]
   (for [item store-items]
     [:div
      [:a
       {:style {:margin 0 :padding 0}
        :href "javascript:;"
        :on-click #(buy-item-handler item)}
       (str "Buy " (:name item) " (" (:cost item) " Ƒiddy)")]
      [:p
       {:style {:margin 0 :padding 0 :margin-bottom "10px" :font-size "smaller"}}
       (:description item)]])
   [:hr]
   (a "Head back." #(go-to-location-handler :outside))))



(defn outside-view [location
                    team
                    go-to-location-handler]
  [:div
   (section [:p "You are being worthless outside."])
   (adventures-view location team go-to-location-handler)])

(defn title-view []
  (section
   [:h1 {:id "title"} "Moképon"]
   [:h2 {:id "tag-line"} "Catching 'em all just got real, yo"]))

(defn status-view [cash items store-items-lookup team]
  [:div
   (team-view team "Your posse:")
   (section
    [:div "Cash: " cash " Ƒiddy"]
    [:hr]
    [:div "Items:"]
    (if (empty? items)
      [:div "None. Cause you're worthless."]
      [:ul (for [[k v] items] [:li (str (:name (k store-items-lookup))  ": " v)])]))])

(defn rpg-view [state
                take-chikapu-handler
                go-to-location-handler
                find-trouble-handler
                chosen
                chosen-can-attack?
                battle-over?
                attack-handler
                sleep-at-home-handler
                active-turn-threshold
                store-items
                store-items-lookup
                buy-item-handler]
  (let [{:keys [location
                team
                team-at-home
                battling
                cash
                items
                play-by-play]} state]
    [:div
     (title-view)
     (cond
       (= location :outside)
       (outside-view location
                     team
                     go-to-location-handler)

       (= location :forest)
       (forest-view team
                    find-trouble-handler
                    chosen
                    chosen-can-attack?
                    battle-over?
                    battling
                    play-by-play
                    go-to-location-handler
                    attack-handler
                    active-turn-threshold)

       (= location :canyon)
       (canyon-view team
                    find-trouble-handler
                    chosen
                    chosen-can-attack?
                    battle-over?
                    battling
                    play-by-play
                    go-to-location-handler
                    attack-handler
                    active-turn-threshold)

       (= location :home)
       (home-view team
                  team-at-home
                  take-chikapu-handler
                  go-to-location-handler
                  sleep-at-home-handler)

       (= location :store)
       (store-view store-items
                   buy-item-handler
                   go-to-location-handler)

       :else
       (section (str "Location " location " not handled.")
                (a "Go back." #(go-to-location-handler :outside))))
     (status-view cash items store-items-lookup team)]))
