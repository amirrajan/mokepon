(ns mokepon.core)

(defn go-find-trouble-in [location]
  (reset! app-state mokepon.rpg/new-game)
  (on-take-chikapu)
  (on-go-to-location location)
  (on-find-trouble))

(defn repl []
  (go-find-trouble-in :forest)
  (on-attack)
  (on-sleep-at-home)
  (on-go-to-location :store)
  app-state)

(stop-autobuild)
(clean-builds)
(start-autobuild :dev)

(cljs.test/run-tests)
