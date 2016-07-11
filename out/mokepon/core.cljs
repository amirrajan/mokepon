(ns mokepon.core
  (:require
   [mokepon.tests :refer [run-tests]]
   [mokepon.container :refer [current-app-state render!]]))

(defn main! []
  (enable-console-print!)
  (swap! current-app-state assoc :value :test)
  (run-tests)
  (swap! current-app-state assoc :value :game)
  (render!))

(main!)
