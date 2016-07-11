(ns mokepon.container
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chipu sulbabaur deogude tirsqule]]
            [mokepon.items :refer [store-items store-items-lookup]]
            [alandipert.storage-atom :refer [local-storage]]
            [mokepon.rpg :refer [new-game
                                 is-dead?
                                 battle-over?
                                 tick-battle
                                 apply-player-attack
                                 can-attack?
                                 heal-team
                                 reset-team-at
                                 active-turn-threshold]]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(reset! alandipert.storage-atom/storage-delay 1000)

(defonce current-app-state
  (atom {:value :game}))

(defonce game-app-state
  (local-storage (atom new-game) :game))

(defonce test-app-state
  (atom new-game))

(defn app-state []
  (if (= (:value @current-app-state) :game)
    game-app-state
    test-app-state))

(defn get-app-state [& path]
  (get-in @(app-state) path))

(defn team-count []
  (count (:team @(app-state))))

(defn chosen-monster []
  (get-app-state :team (:chosen-key @(app-state))))

(defn set-battle [chosen-key battling]
  (assoc @(app-state)
         :chosen-key chosen-key
         :battling battling))

(defn clear-battle! []
  (swap! (app-state)
         assoc
         :chosen-key nil
         :battling nil))

(defn update-in-team [monster-key new-value]
  (assoc (:team @(app-state)) monster-key new-value))

(defn add-to-play-by-play [& text]
  (conj (:play-by-play @(app-state)) (apply str text)))

(defn decrement-item! [item-key]
  (swap! (app-state)
         update-in
         [:items item-key]
         #(dec (or % 0))))

(defn item-count [item-key]
  (or (get-app-state :items item-key) 0))

(defn first-live-team-member []
  (first
   (map (fn [[k v]] k)
        (filter (fn [[k v]]
                  (not (is-dead? v)))
                (:team @(app-state))))))

(defn add-to-play-by-play! [& message]
  (swap!
   (app-state)
   assoc
   :play-by-play
   (apply add-to-play-by-play message)))

(defn buy-item! [item-id]
  (let [item (item-id store-items-lookup)
        current-cash (:cash @(app-state))
        afford? (>= current-cash (:cost item))
        new-cash (- current-cash (:cost item))]
    (if afford?
      (do (swap!
           (app-state)
           assoc
           :cash new-cash)
          (add-to-play-by-play!
           "You take the " (:name item)
           " from the midget's saggy, squishy hand. "
           "He smiles and gives you a tip of his top hat.")
          (swap! (app-state)
                 update-in
                 [:items item-id]
                 #(inc (item-count item-id))))

      (add-to-play-by-play!
       "The midget bitch slaps you saying that you can't afford that. "
       "He wonders if you were taught common core math."))))

(defn throw-mokebox! []
  (let [{:keys [max-hp hp]} (:battling @(app-state))
        capture-chance (/ (- max-hp hp) max-hp)
        roll (rand)
        captured? (> capture-chance roll)
        has-mokeball? (:mokebox (:items @(app-state)))
        battling (:battling @(app-state))]
    (if has-mokeball?
      (do
        (decrement-item! :mokebox)
        (if captured?
          (do
            (add-to-play-by-play!
             "The Mokébox knocks out the "
             (get-app-state :battling :name)
             ". It's been captured!")
            (swap! (app-state)
                   assoc-in
                   [:battling :captured]
                   true)
            (swap! (app-state)
                   update-in
                   [:team]
                   #(assoc %
                           (:id battling)
                           battling)))
          (add-to-play-by-play!
           "The Mokébox bounces off "
           (get-app-state :battling :name)
           ". It's still too strong!"))))))

(defn sleep-at-home! []
  (do
    (add-to-play-by-play!
     "You've slept. Your posse has been healed.")
    (swap!
     (app-state)
     update-in
     [:team]
     #(heal-team %))))

(defn reset-team-at! []
  (swap!
   (app-state)
   update-in
   [:team]
   #(reset-team-at %)))

(defn tick-battle-core! []
  (let [{:keys [battling chosen play-by-play]}
        (tick-battle (chosen-monster)
                     (:battling @(app-state))
                     (:play-by-play @(app-state)))]
    (do
      (swap! (app-state)
             assoc
             :battling battling
             :team (update-in-team (:chosen-key @(app-state)) chosen)
             :play-by-play play-by-play)
      (let [live-member-key (first-live-team-member)
            live-monster (get-in @(app-state) [:team live-member-key])]
        (if (and (is-dead? chosen) live-member-key)
          (do
            (add-to-play-by-play! (str (:name live-monster) " dashes into battle!"))
            (swap! (app-state) assoc :chosen-key live-member-key)))))))

(defn dead-team-member-keys []
  (map (fn [[k v]] k)
       (filter
        (fn [[k v]] (is-dead? v))
        (:team @(app-state)))))

(defn remove-dead-team-members! []
  (swap! (app-state)
         update-in [:team]
         #(apply dissoc % (dead-team-member-keys))))

(defn tick-battle! []
  (if (not (battle-over?
            (chosen-monster)
            (:battling @(app-state))))
      (do
        (tick-battle-core!)
        (.setTimeout js/window #(tick-battle!) 350))

      (reset-team-at!)))


(defn take-chipu! []
  (swap! (app-state)
         assoc
         :team (assoc (:team @(app-state)) :chipu chipu)))

(defn go-to-location! [loc]
  (do
    (remove-dead-team-members!)
    (swap! (app-state)
           assoc
           :location loc :battling nil :chosen-key nil)))

(defn attack! []
  (let [{:keys [battling chosen play-by-play]}
        (apply-player-attack
         (chosen-monster)
         (:battling @(app-state))
         (:play-by-play @(app-state)))]
    (swap! (app-state)
           assoc
           :battling battling
           :team (update-in-team (:chosen-key @(app-state)) chosen)
           :play-by-play play-by-play)))


(defn set-monsters [chosen-key battling play-by-play]
  {:chosen-key chosen-key
   :battling battling
   :play-by-play (add-to-play-by-play
                  "It has begun! " (:name (chosen-key (:team @(app-state))))
                  " vs " (:name battling) "!")})

(defn set-battle! [chosen-key battling]
  (swap! (app-state)
         merge
         (set-monsters chosen-key
                       battling
                       (:play-by-play @(app-state)))))



(defn find-trouble! [kick-off-battle]
  (let [team (:team @(app-state))
        location (:location @(app-state))
        first-team-member (first-live-team-member)
        location-monsters {:forest sulbabaur
                           :canyon deogude
                           :pool   tirsqule}
        monster-for-location (location location-monsters)]
    (cond
      (empty? team)
      false
      monster-for-location
      (do
        (set-battle! first-team-member
                       monster-for-location)
        (if kick-off-battle (tick-battle!))))))

(defn rpg-container []
  (sab/html
   (rpg-view @(app-state)
             take-chipu!
             go-to-location!
             #(find-trouble! true)
             (chosen-monster)
             (and (can-attack? (chosen-monster))
                  (not (battle-over? (chosen-monster) (:battling @(app-state)))))
             (battle-over? (chosen-monster) (:battling @(app-state)))
             attack!
             sleep-at-home!
             active-turn-threshold
             store-items
             store-items-lookup
             buy-item!
             throw-mokebox!)))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch game-app-state
           :on-change
           (fn [_ _ _ _] (render!)))
