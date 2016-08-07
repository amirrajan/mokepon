(ns mokepon.container)

(comment defn go-find-trouble-in [location]
  (reset! (app-state) mokepon.rpg/new-game)
  (on-take-chipu)
  (on-go-to-location location)
  (on-find-trouble))

(comment defn repl []
  (go-find-trouble-in :forest)
  (swap! app-state merge {:cash 100})
  (on-attack)
  (on-sleep-at-home)
  (on-go-to-location :store)
  app-state)
