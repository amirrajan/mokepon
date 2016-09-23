(ns mokepon.elements
  (:require [sablono.core :as sab]))

(defn fade-in [elem]
  (set! (.-transition (.-style elem)) "opacity 1000ms")
  (set! (.--webkit-transition (.-style elem)) "opacity 1000ms")
  (set! (.-opacity (.-style elem)) 1))

(defn from-component-definition [component children]
  (.createElement js/React component nil (sab/html children)))

(def fade-in-component-definition
  (.createClass
   js/React
   #js {:render
        (fn []
          (this-as
            this
            (.log js/console (clj->js this))
            (.createElement js/React
                            "div"
                            nil
                            (.. this -props -children))))
        :componentDidMount
        (fn []
          (this-as this
            (let [elem (.getDOMNode this)]
              (set! (.-opacity (.-style elem)) 0)
              (.requestAnimationFrame
               js/window
               #(fade-in elem)))))}))

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
