(ns mokepon.views.shop
  (:require [sablono.core :as sab]
            [mokepon.elements :refer [a disabled-a conditional-a section todo progress-bar]]))

(defn shop-item-view [item shop-item-available-handler buy-item-handler]
  (when (shop-item-available-handler (:id item))
    [:div
     [:a
      {:style {:margin 0 :padding 0}
       :href "javascript:;"
       :on-click #(buy-item-handler (:id item))}
      (str "Buy " (:name item) " (" (:cost item) " Ƒiddy)")]
     [:p
      {:style {:margin 0 :padding 0 :margin-bottom "10px" :font-size "smaller"}}
      (:description item)]]))

(defn view [shop-items
            buy-item-handler
            go-to-location-handler
            shop-item-available-handler]
  (section
   [:p (str "You walk into the shop. A midget stands behind the counter on a stool. "
            "He occasionally props himself up with locked arms and dangles his feet in the air.")]

   [:hr]
   (section
    (for [item shop-items]
      (shop-item-view item
                       shop-item-available-handler
                       buy-item-handler)))
   (a "Head back." #(go-to-location-handler :outside))))
