(ns mokepon.core)

(defn go-find-trouble-in [location]
  (reset! (app-state) mokepon.rpg/new-game)
  (on-take-chipu)
  (on-go-to-location location)
  (on-find-trouble))

(defn repl []
  (go-find-trouble-in :forest)
  (swap! app-state merge {:cash 100})
  (on-attack)
  (on-sleep-at-home)
  (on-go-to-location :store)
  app-state)
