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
                                 choosable-monsters
                                 buy-item
                                 use-candy
                                 reset-team-at
                                 choose-monster
                                 throw-mokebox
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

(defn get-state [& path]
  (get-in @(app-state) path))

(defn log [o]
  (.log js/console (clj->js o)))

(defn log-state [& path]
  (log (apply get-state path)))

(defn team-count []
  (count (get-state :team)))

(defn chosen-monster []
  (get-state :team (get-state :chosen-key)))

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
  (assoc (get-state :team) monster-key new-value))

(defn add-to-play-by-play [& text]
  (conj (get-state :play-by-play) (apply str text)))

(defn decrement-item! [item-key]
  (swap! (app-state)
         update-in
         [:items item-key]
         #(dec (or % 0))))

(defn item-count [item-key]
  (or (get-state :items item-key) 0))

(defn add-to-play-by-play! [& message]
  (swap!
   (app-state)
   assoc
   :play-by-play
   (apply add-to-play-by-play message)))

(defn choose-monster! [team-key]
  (swap! (app-state) choose-monster team-key))

(defn first-live-team-member []
  (first
   (choosable-monsters (get-state :team))))

(defn buy-item! [item-id]
  (swap! (app-state)
         buy-item
         item-id
         store-items-lookup))

(defn throw-mokebox! [] (swap! (app-state) throw-mokebox))

(defn use-candy! []
  (swap! (app-state) use-candy))

(defn sleep-at-home! []
  (swap! (app-state) heal-team))

(defn reset-team-at! []
  (swap!
   (app-state)
   update-in
   [:team]
   #(reset-team-at %)))

(defn tick-battle-core! [] (swap! (app-state) tick-battle))

(defn dead-team-member-keys []
  (map (fn [[k v]] k)
       (filter
        (fn [[k v]] (is-dead? v))
        (get-state :team))))

(defn remove-dead-team-members! []
  (swap! (app-state)
         update-in [:team]
         #(apply dissoc % (dead-team-member-keys))))

(defn count-down! [message callback]
  (if message (add-to-play-by-play! message))
  (swap! (app-state) assoc :battle-count-down (- (get-state :battle-count-down) 250))
  (.setTimeout js/window callback 250))

(defn tick-battle! []
  (if (not (battle-over?
            (chosen-monster)
            (get-state :battling)))
      (cond (not (get-state :battle-count-down))
            (do
              (swap! (app-state) assoc :battle-count-down 5000)
              (.setTimeout js/window #(tick-battle!) 250))

            (= (get-state :battle-count-down) 5000)
            (count-down! "Battle starts in 5..." tick-battle!)

            (= (get-state :battle-count-down) 4000)
            (count-down! "Battle starts in 4..." tick-battle!)

            (= (get-state :battle-count-down) 3000)
            (count-down! "Battle starts in 3..." tick-battle!)

            (= (get-state :battle-count-down) 2000)
            (count-down! "Battle starts in 2..." tick-battle!)

            (= (get-state :battle-count-down) 1000)
            (count-down! "Battle starts in 1..." tick-battle!)

            (= (get-state :battle-count-down) 0)
            (do
              (tick-battle-core!)
              (.setTimeout js/window #(tick-battle!) 300))

            :else
            (count-down! nil tick-battle!))

      (reset-team-at!)))


(defn take-chipu! []
  (swap! (app-state)
         assoc
         :team (assoc (get-state :team) :chipu chipu)))

(defn go-to-location! [loc]
  (remove-dead-team-members!)
  (swap! (app-state)
         assoc
         :location loc
         :battling nil
         :chosen-key nil
         :battle-count-down nil))

(defn attack! []
  (let [{:keys [battling chosen play-by-play cash-reward]}
        (apply-player-attack
         (chosen-monster)
         (get-state :battling)
         (get-state :play-by-play))]
    (swap! (app-state)
           assoc
           :battling battling
           :team (update-in-team (get-state :chosen-key) chosen)
           :play-by-play play-by-play
           :cash (+ (get-state :cash) cash-reward))))


(defn set-monsters [chosen-key battling play-by-play]
  {:chosen-key chosen-key
   :battling battling
   :play-by-play (add-to-play-by-play
                  "It has begun! " (get-state :team chosen-key :name)
                  " vs " (:name battling) "!")})

(defn set-battle! [chosen-key battling]
  (swap! (app-state)
         merge
         (set-monsters chosen-key
                       battling
                       (get-state :play-by-play))))

(defn set-cash! [cash]
  (swap! (app-state) assoc :cash cash))

(def location-monsters
  {:forest sulbabaur
   :canyon deogude
   :pool   tirsqule})

(defn find-trouble! [kick-off-battle]
  (let [team (get-state :team)
        location (get-state :location)
        first-team-member (first-live-team-member)
        monster-for-location (location location-monsters)]
    (cond
      (empty? team)
      false

      monster-for-location
      (do
        (set-battle! first-team-member
                     monster-for-location)
        (when kick-off-battle (tick-battle!))))))

(defn chosen-can-attack? []
  (and (can-attack? (chosen-monster))
       (not (battle-over? (chosen-monster) (get-state :battling)))))

(defn rpg-container []
  (sab/html
   (rpg-view @(app-state)
             take-chipu!
             go-to-location!
             #(find-trouble! true)
             (choosable-monsters (get-state :team))
             (chosen-monster)
             (chosen-can-attack?)
             (battle-over? (chosen-monster) (get-state :battling))
             attack!
             sleep-at-home!
             active-turn-threshold
             store-items
             store-items-lookup
             buy-item!
             throw-mokebox!
             choose-monster!
             use-candy!)))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch game-app-state
           :on-change
           (fn [_ _ _ _] (render!)))
