(ns mokepon.views.battle
  (:require [sablono.core :as sab]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(defn battler-view [monster full-active-turn]
  (section
   [:b {:style {:font-size :larger}} (str (:name monster) " (hp: " (:hp monster) ")" )]
   [:hr]
   (progress-bar (/ (:at monster) full-active-turn))))

(defn battle-actions-view [team
                           choosable-monsters
                           chosen-can-attack?
                           attack-handler
                           battle-over?
                           items
                           throw-mokebox-handler
                           choose-monster-handler
                           candy-handler]
  (section
   (conditional-a chosen-can-attack? "Attack" attack-handler)
   (if (:candy items)
     (conditional-a (and (not battle-over?) (pos? (:candy items)))
                    (str "Candy" " (" (:candy items) ")")
                    candy-handler))
   (if (:mokebox items)
     (conditional-a (and (not battle-over?) (pos? (:mokebox items)))
                    (str "Throw Mokébox" " (" (:mokebox items) ")")
                    throw-mokebox-handler))
   (if (and (not battle-over?) (> (count choosable-monsters) 1))
     (for [m choosable-monsters]
       (let [monster (m team)]
         (a (str "Choose " (:name monster) " (" (:hp monster) "/" (:max-hp monster) ")")
            #(choose-monster-handler m)))))))

(defn battle-report-view [battle-over? go-to-location-handler]
  (if battle-over?
    (section
     [:p "The battle has ended."]
     (a "Back" #(go-to-location-handler :outside)))))

(defn view [team
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
            candy-handler]
  [:div
   (battler-view battling active-turn-threshold)
   (battler-view chosen active-turn-threshold)
   (battle-actions-view team
                        choosable-monsters
                        chosen-can-attack?
                        attack-handler
                        battle-over?
                        items
                        throw-mokebox-handler
                        choose-monster-handler
                        candy-handler)
   (battle-report-view battle-over? go-to-location-handler)])
