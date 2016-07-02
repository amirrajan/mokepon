(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.monsters :refer [chikapu sulbabaur deogude]]
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
  (merge @app-state {:chosen-key chosen-key :battling battling}))

(defn clear-battle []
  (swap! app-state merge {:chosen-key nil :battling nil}))

(defn update-in-team [monster-key new-value]
  (merge (:team @app-state) {monster-key new-value}))

(defn on-sleep-at-home []
  (swap! app-state update-in [:team] #(heal-team %)))

(defn on-tick-battle-core []
  (let [{:keys [battling chosen play-by-play]}
        (tick-battle (chosen-monster)
                     (:battling @app-state)
                     (:play-by-play @app-state))]
    (swap! app-state
           merge
           {:battling battling
            :team (update-in-team (:chosen-key @app-state) chosen)
            :play-by-play play-by-play})))

(defn remove-dead-team-members []
  (if (is-dead? (chosen-monster))
    (swap! app-state update-in [:team] #(dissoc % (:chosen-key @app-state)))))

(defn on-tick-battle []
  (if (not (battle-over?
            (chosen-monster)
            (:battling @app-state)))
      (do
        (on-tick-battle-core)
        (.setTimeout js/window #(on-tick-battle) 250))))


(defn on-take-chikapu []
  (swap! app-state merge {:team (merge (:team @app-state) {:chikapu chikapu})}))

(defn on-go-to-location []
  (fn [loc]
    (do
      (remove-dead-team-members)
      (swap! app-state merge {:location loc :battling nil :chosen-key nil}))))

(defn on-attack []
  (let [{:keys [battling chosen play-by-play]}
        (apply-player-attack
         (chosen-monster)
         (:battling @app-state)
         (:play-by-play @app-state))]
    (swap! app-state
           merge
           {:battling battling
            :team (update-in-team (:chosen-key @app-state) chosen)
            :play-by-play play-by-play})))


(defn set-monsters [chosen-key battling]
  {:chosen-key chosen-key
   :battling battling
   :play-by-play [(str "It has begun! " (:name (chosen-key (:team @app-state))) " vs " (:name battling) "!")]})

(defn on-set-battle [chosen-key battling]
  (swap! app-state merge (set-monsters chosen-key battling)))

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
             #(on-take-chikapu)
             (on-go-to-location)
             #(on-find-trouble)
             (chosen-monster)
             (and (can-attack? (chosen-monster))
                  (not (battle-over? (chosen-monster) (:battling @app-state))))
             (battle-over? (chosen-monster) (:battling @app-state))
             #(on-attack)
             on-sleep-at-home
             active-turn-threshold)))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state
           :on-change
           (fn [_ _ _ _] (render!)))

(render!)
