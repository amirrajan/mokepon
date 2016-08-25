(ns mokepon.mokedex
  (:require [sablono.core :as sab]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(def monster-type-string
  {:electric "Electric"
   :grass "Grass"
   :water "Water"
   :ground "Ground"})

(defn mokedex-item [monster]
  (let [{:keys [name mokedex-text type]} monster]
    [:li
     [:div name]
     [:div {:class "info"}
      [:div mokedex-text]
      [:div "Captured: Yes"]
      [:div (str "Type: " (type monster-type-string))]]]))

(defn view [go-to-location-handler mokedex]
  [:div
   (section [:p "Mokedex"])
   (section
    [:ol.mokedex
     (for [monster (:monsters mokedex)] (mokedex-item monster))])
   (section (a "Back." #(go-to-location-handler :phone)))])
