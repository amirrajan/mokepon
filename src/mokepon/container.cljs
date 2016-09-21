(ns mokepon.container
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chipu sulbabaur deogude tirsqule]]
            [mokepon.shop :refer [shop-items shop-items-lookup]]
            [mokepon.locations :refer [location-info]]
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
                                 find-trouble
                                 reset-team-at
                                 choose-monster
                                 chosen-monster
                                 throw-mokebox
                                 remove-dead-team-members
                                 take-chipu
                                 set-battle
                                 active-turn-threshold]]
            [mokepon.components :refer [rpg-view]]
            [clojure.string :as string]))

(defn alert [message] #(.alert js/window message))

(reset! alandipert.storage-atom/storage-delay 1000)

(defonce current-app-state
  (atom {:value :game}))

(defonce game-app-state
  (local-storage (atom (new-game)) :game))

(defonce test-app-state
  (atom (new-game)))

(defn app-state []
  (if (= (:value @current-app-state) :game)
    game-app-state
    test-app-state))

(defn reset-game! []
  (reset! (app-state) (new-game)))

(defn get-state [& path]
  (get-in @(app-state) path))

(defn log [o]
  (.log js/console (clj->js o)))

(defn log-state [& path]
  (log (apply get-state path)))

(defn team-count []
  (count (get-state :team)))

(defn clear-battle! []
  (swap! (app-state)
         assoc
         :chosen-key nil
         :battling nil))

(defn decrement-item! [item-key]
  (swap! (app-state)
         update-in
         [:items item-key]
         #(dec (or % 0))))

(defn item-count [item-key]
  (or (get-state :items item-key) 0))

(defn add-to-play-by-play [app-state & text]
  (update app-state :play-by-play conj (apply string/join text)))

(defn add-to-play-by-play! [& message]
  (swap! (app-state) add-to-play-by-play message))

(defn choose-monster! [team-key]
  (swap! (app-state) choose-monster team-key))

(defn first-live-team-member []
  (first
   (choosable-monsters (get-state :team))))

(defn buy-item! [item-id]
  (swap! (app-state)
         buy-item
         item-id
         (shop-items-lookup)))

(defn throw-mokebox! [] (swap! (app-state) throw-mokebox))

(defn use-candy! []
  (swap! (app-state) use-candy))

(defn sleep-at-home! []
  (swap! (app-state) heal-team))

(defn reset-team-at! []
  (swap! (app-state) update :team reset-team-at))

(defn tick-battle-core! [] (swap! (app-state) tick-battle))

(defn remove-dead-team-members! []
  (swap! (app-state) remove-dead-team-members))

(defn count-down [app-state]
  (update app-state :battle-count-down - 250))

(defn count-down! [message callback]
  (when message (add-to-play-by-play! message))
  (swap! (app-state) count-down)
  (.setTimeout js/window callback 250))

(defn app-state-chosen-monster []
  (chosen-monster @(app-state)))

(defn app-state-battling [] (:battling @(app-state)))

(defn tick-battle! []
  (if-not (battle-over?
            (app-state-chosen-monster)
            (app-state-battling))
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

            (zero? (get-state :battle-count-down))
            (do
              (tick-battle-core!)
              (.setTimeout js/window #(tick-battle!) 300))

            :else
            (count-down! nil tick-battle!))

      (reset-team-at!)))


(defn take-chipu! []
  (swap! (app-state) take-chipu))

(defn go-to-location! [loc]
  (remove-dead-team-members!)
  (swap! (app-state)
         assoc
         :location loc
         :battling nil
         :chosen-key nil
         :battle-count-down nil))

(defn attack [app-state battling chosen play-by-play cash-reward]
  (assoc app-state
    :battling battling
    :team (assoc (:team app-state) (:chosen-key app-state) chosen)
    :play-by-play play-by-play
    :cash (+ (:cash app-state) cash-reward)))

(defn attack! []
  (let [{:keys [battling chosen play-by-play cash-reward]}
        (apply-player-attack
         (app-state-chosen-monster)
         (app-state-battling)
         (get-state :play-by-play))]
    (swap! (app-state) attack battling chosen play-by-play cash-reward)))

(defn set-battle! [chosen-key battling]
  (swap! (app-state)
         set-battle
         chosen-key battling))

(defn set-cash! [cash]
  (swap! (app-state) assoc :cash cash))

(def location-monsters
  {:forest sulbabaur
   :canyon deogude
   :pool   tirsqule})

(defn find-trouble! [kick-off-battle]
  (swap! (app-state) find-trouble)
  (when kick-off-battle (tick-battle!)))

(defn chosen-can-attack? []
  (and (can-attack? (app-state-chosen-monster))
       (not (battle-over? (app-state-chosen-monster)
                          (app-state-battling)))))


(defn location-available? [location]
  ((:available-if (location (location-info))) @(app-state)))

(defn shop-item-available? [item]
  ((:available-if (item (shop-items-lookup))) @(app-state)))

(defn rpg-container []
  (sab/html
   (rpg-view @(app-state)
             take-chipu!
             go-to-location!
             #(find-trouble! true)
             (choosable-monsters (get-state :team))
             (app-state-chosen-monster)
             (chosen-can-attack?)
             (battle-over? (app-state-chosen-monster) (app-state-battling))
             attack!
             sleep-at-home!
             active-turn-threshold
             (shop-items)
             (shop-items-lookup)
             buy-item!
             throw-mokebox!
             choose-monster!
             use-candy!
             location-available?
             (location-info)
             shop-item-available?
             reset-game!)))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch game-app-state
           :on-change
           (fn [_ _ _ _] (render!)))
