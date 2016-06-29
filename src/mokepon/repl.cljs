(ns mokepon.core)

(defn repl []
  (go-find-trouble-in :forest)
  (on-attack app-state)
  )

(defn go-find-trouble-in [location]
  (reset! app-state mokepon.rpg/new-game)
  (on-take-chikapu app-state)
  ((on-go-to-location app-state) location)
  (on-find-trouble app-state))
