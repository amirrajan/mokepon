(ns mokepon.core
  (:require [sablono.core :as sab]
            [mokepon.components :refer [rpg-view]]))

(defn alert [message] #(.alert js/window message))

(defonce app-state (atom new-game))

  ;; tickBattle() {
  ;;   if (this._isBattleOver()) {
  ;;     this.saveGame();
  ;;     return;
  ;;   }

  ;;   this.tickBattleCore();
  ;; }

  ;; tickBattleCore() {
  ;;   this.setState(
  ;;     tickBattle(
  ;;       this.state.chosen,
  ;;       this.state.battling,
  ;;       this.state.team,
  ;;       this.state.playByPlay));

  ;;   setTimeout(bind(() => {
  ;;     this.tickBattle();
  ;;   }, this), 250);
  ;; }

(defn on-tick-battle []
  (if (not= (is-battle-over))
    (tick-battle-core)))

(defn on-tick-battle-core []

  (.setTimeout js/window tick-battle 250))

(defn on-take-chikapu [state]
  (swap! state update-in [:team] #(conj % chikapu)))

(defn on-go-to-location [state]
  (fn [loc] (swap! state update-in [:location] (fn [_] loc))))

(defn set-battle [state chosen battling]
  (merge state {:chosen chosen :battling battling}))

(defn on-find-trouble [state]
  (cond
    (= (:location @state) :forest)
    (swap! app-state merge {:chosen chikapu :battling sulbabaur})

    (= (:location @state) :canyon)
    (swap! app-state merge {:chosen chikapu :battling deogude})))

(defn rpg-container []
  (sab/html
   (rpg-view @app-state
             #(on-take-chikapu app-state)
             (on-go-to-location app-state))))

(defn render! []
  (.render js/React
           (rpg-container)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
