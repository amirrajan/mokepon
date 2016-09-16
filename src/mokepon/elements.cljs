(ns mokepon.elements
  (:require [sablono.core :as sab]))

(def todo #(.alert js/window "todo"))

(defn a [text on-click]
  [:a {:href "javascript:;" :on-click on-click} (str "[" text "]")])

(defn disabled-a [text]
  [:a.disabled {:href "javascript:;"} (str "[" text "]")])

(defn conditional-a [predicate text on-click]
  (if predicate (a text on-click) (disabled-a text)))

(defn section [& elements] [:div elements [:hr]])

(defn progress-bar [percentage]
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
