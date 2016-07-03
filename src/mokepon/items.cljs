(ns mokepon.items)

(defn store-items []
  [{:id :mokebox
   :name "Mokébox"
   :cost 10
   :description "Use this to catach Moképon."}
  {:id :battery
   :name "Battery"
   :cost 5
   :description "Use this to heal electric Moképon."}
  {:id :fertilizer
   :name "Fertilizer"
   :cost 5
   :description "Use this to heal plant Moképon."}])
