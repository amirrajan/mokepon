(ns mokepon.core
  (:require
   [mokepon.tests.core :refer [run-tests]]
   [mokepon.tests.battle]
   [mokepon.tests.affinities]
   [mokepon.tests.store]
   [mokepon.tests.home]
   [mokepon.tests.mokedex]
   [mokepon.tests.messages]

   [mokepon.container :refer [current-app-state render!]]
   [mokepon.views.mokedex]
   [mokepon.views.battle]
   [mokepon.views.store]))

(defn main! []
  (enable-console-print!)
  (swap! current-app-state assoc :value :test)
  (run-tests)
  (swap! current-app-state assoc :value :game)
  (render!))

(main!)
