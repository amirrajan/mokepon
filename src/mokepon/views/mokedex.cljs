(ns mokepon.views.mokedex
  (:require [sablono.core :as sab]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(def monster-type-string
  {:electric "Electric"
   :grass "Grass"
   :water "Water"
   :ground "Ground"})

(defn captured-view [captured]
  (if captured
    [:div [:span  "Captured: Yes" ]]
    [:div [:span "Captured: "] [:span {:style {:font-weight "bold" :color "#CC0000"}} "No"]]))

(defn mokedex-item [monster]
  (let [{:keys [name mokedex-text type captured encountered]} monster]
    (cond encountered
          [:li
           [:div name]
           [:div {:class "info"}
            ;[:div mokedex-text]
            (captured-view captured)
            [:div (str "Type: " (type monster-type-string))]]]

          :else
          [:li "???"])))

(defn view [go-to-location-handler mokedex]
  [:div
   (section [:p "Mokédex"])
   (section
    [:ol.mokedex
     (for [monster (:monsters mokedex)] (mokedex-item monster))])
   (section (a "Back" #(go-to-location-handler :phone)))])
