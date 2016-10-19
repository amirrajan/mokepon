(ns mokepon.elements
  (:require
   [cljsjs.react :as React]
   [cljsjs.react.dom :as ReactDOM]
   [sablono.core :as html :refer-macros [html]]))

(defn fade-in [elem]
  (set! (.-transition (.-style elem)) "opacity 1000ms")
  (set! (.--webkit-transition (.-style elem)) "opacity 1000ms")
  (set! (.-opacity (.-style elem)) 1))

(defn from-component-definition [component props children]
  (React.createElement component (clj->js props) (html children)))

(def fade-in-component-definition
  (React.createClass
   #js {:render
        (fn []
          (this-as
              this
            (React.createElement
             "div"
             (clj->js {:style {:margin "0" :padding "0"}})
             (.. this -props -children))))
        :componentDidMount
        (fn []
          (this-as this
            (let [elem (ReactDOM.findDOMNode this)]
              (set! (.-opacity (.-style elem)) 0)
              (.setTimeout
               js/window
               (fn []
                 (.requestAnimationFrame
                  js/window
                  (fn []
                    (when (.. this -props -callback)
                      (.setTimeout js/window (.. this -props -callback) 2000))
                    (fade-in elem)))) 1000))))}))

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
