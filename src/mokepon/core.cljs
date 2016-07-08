(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chikapu sulbabaur deogude]]
            [mokepon.items :refer [store-items store-items-lookup]]
            [alandipert.storage-atom :refer [local-storage]]
            [mokepon.rpg :refer [new-game
                                 is-dead?
                                 battle-over?
                                 tick-battle
                                 apply-player-attack
                                 can-attack?
                                 heal-team
                                 active-turn-threshold]]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(reset! alandipert.storage-atom/storage-delay 1000)

(defonce app-state (local-storage (atom new-game) :game))

(defn team-count []
  (count (keys (:team @app-state))))

(defn chosen-monster []
  (if (:chosen-key @app-state)
    ((:chosen-key @app-state) (:team @app-state))))

(defn set-battle [chosen-key battling]
  (assoc @app-state :chosen-key chosen-key :battling battling))

(defn clear-battle []
  (swap! app-state assoc :chosen-key nil :battling nil))

(defn update-in-team [monster-key new-value]
  (assoc (:team @app-state) monster-key new-value))

(defn add-to-play-by-play [text]
  (conj (:play-by-play @app-state) text))

(defn on-decrement-item [item-key]
  (swap! app-state
         update-in
         [:items item-key]
         #(dec (or % 0))))

(defn item-count [item-key]
  (or (item-key (:items @app-state)) 0))

(defn on-add-cash [amount]
  (swap! app-state
         update-in
         [:cash]
         #(+ % amount)))

(defn on-add-to-play-by-play [message]
  (swap!
   app-state
   assoc
   :play-by-play
   (add-to-play-by-play message)))

(defn on-buy-item [item]
  (let [item-id (:id item)
        new-item-count (inc (item-count item-id))
        current-cash (:cash @app-state)
        afford? (>= current-cash (:cost item))
        new-cash (- current-cash (:cost item))]
    (if afford?
      (do (swap!
           app-state
           assoc
           :cash
           new-cash)
          (on-add-to-play-by-play
           (str "You take the " (:name item)
                " from the midget's saggy, squishy hand. "
                "He smiles and gives you a tip of his top hat." ))
          (swap! app-state
                 update-in
                 [:items]
                 #(assoc % item-id new-item-count)))

      (on-add-to-play-by-play
       (str "The midget bitch slaps you saying that you can't afford that. "
            "He wonders if you were taught common core math.")))))

(defn on-throw-mokebox []
  (let [{:keys [max-hp hp]} (:battling @app-state)
        capture-chance (/ (- max-hp hp) max-hp)
        roll (rand)
        captured? (> capture-chance roll)]
    (if (:mokebox (:items @app-state))
      (do
        (on-decrement-item :mokebox)
        (if captured?
          (do
            (on-add-to-play-by-play
             (str "The Mokébox knocks out the "
                  (get-in @app-state [:battling :name])
                  ". It's been captured!"))
            (swap! app-state
                   update-in
                   [:battling :captured]
                   (fn [_] true))
            (swap! app-state
                   update-in
                   [:team]
                   #(assoc %
                           (:id (:battling @app-state))
                           (:battling @app-state))))
          (on-add-to-play-by-play
           (str "The Mokébox bounces off "
                (get-in @app-state [:battling :name])
                ". It's still too strong!")))))))

(defn on-sleep-at-home []
  (do
    (swap!
     app-state
     assoc
     :play-by-play
     (add-to-play-by-play
      "You've slept. Your posse has been healed."))
    (swap!
     app-state
     update-in
     [:team]
     #(heal-team %))))

(defn on-tick-battle-core []
  (let [{:keys [battling chosen play-by-play]}
        (tick-battle (chosen-monster)
                     (:battling @app-state)
                     (:play-by-play @app-state))]
    (swap! app-state
           assoc
           :battling battling
           :team (update-in-team (:chosen-key @app-state) chosen)
           :play-by-play play-by-play)))

(defn remove-dead-team-members []
  (if (is-dead? (chosen-monster))
    (swap! app-state
           update-in
           [:team]
           #(dissoc % (:chosen-key @app-state)))))

(defn on-tick-battle []
  (if (not (battle-over?
            (chosen-monster)
            (:battling @app-state)))
      (do
        (on-tick-battle-core)
        (.setTimeout js/window #(on-tick-battle) 250))))


(defn on-take-chikapu []
  (swap! app-state
         assoc
         :team (assoc (:team @app-state) :chikapu chikapu)))

(defn on-go-to-location [loc]
  (do
    (remove-dead-team-members)
    (swap! app-state
           assoc
           :location loc :battling nil :chosen-key nil)))

(defn on-attack []
  (let [{:keys [battling chosen play-by-play]}
        (apply-player-attack
         (chosen-monster)
         (:battling @app-state)
         (:play-by-play @app-state))]
    (swap! app-state
           assoc
           :battling battling
           :team (update-in-team (:chosen-key @app-state) chosen)
           :play-by-play play-by-play)))


(defn set-monsters [chosen-key battling play-by-play]
  {:chosen-key chosen-key
   :battling battling
   :play-by-play (add-to-play-by-play
                  (str "It has begun! " (:name (chosen-key (:team @app-state))) " vs " (:name battling) "!"))})

(defn on-set-battle [chosen-key battling]
  (swap! app-state
         merge
         (set-monsters chosen-key
                       battling
                       (:play-by-play @app-state))))

(defn on-find-trouble []
  (cond
    (empty? (:team @app-state)) false

    (= (:location @app-state) :forest)
    ((do
      (on-set-battle :chikapu sulbabaur)
      (on-tick-battle)))

    (= (:location @app-state) :canyon)
    (do
      (on-set-battle :chikapu deogude)
      (on-tick-battle))))

(defn rpg-container []
  (sab/html
   (rpg-view @app-state
             on-take-chikapu
             on-go-to-location
             on-find-trouble
             (chosen-monster)
             (and (can-attack? (chosen-monster))
                  (not (battle-over? (chosen-monster) (:battling @app-state))))
             (battle-over? (chosen-monster) (:battling @app-state))
             on-attack
             on-sleep-at-home
             active-turn-threshold
             store-items
             store-items-lookup
             on-buy-item
             on-throw-mokebox)))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state
           :on-change
           (fn [_ _ _ _] (render!)))

(render!)
