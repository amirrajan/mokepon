(ns mokepon.items)

(def store-items
  [{:id :mokebox
   :name "Mokébox"
   :cost 10
   :description "Use this to catch Moképon."}
  {:id :battery
   :name "Battery"
   :cost 5
   :description "Use this to heal electric Moképon."}
  {:id :fertilizer
   :name "Fertilizer"
   :cost 5
   :description "Use this to heal plant Moképon."}])

(def store-items-lookup
  (into {}
        (map (fn [item] [(:id item) item])
             store-items)))
