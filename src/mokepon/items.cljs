(ns mokepon.items)

(def store-items
  [{:id :mokebox
   :name "Mokébox"
   :cost 10
   :description "Use this to catch Moképon."}
  {:id :candy
   :name "Candy"
   :cost 5
   :description "Use this to heal Moképon."}])

(def store-items-lookup
  (into {}
        (map (fn [item] [(:id item) item])
             store-items)))
