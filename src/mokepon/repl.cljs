(ns mokepon.core)

(defn go-find-trouble-in [location]
  (reset! app-state mokepon.rpg/new-game)
  (on-take-chikapu)
  ((on-go-to-location) location)
  (on-find-trouble))

(defn repl []
  (go-find-trouble-in :forest)
  (on-attack)
  (on-sleep-at-home)
  ((on-go-to-location) :store)
  app-state
  )

(mokepon.rpg/can-attack? (chosen-monster))
(mokepon.rpg/battle-over? (chosen-monster) (:battling @app-state))
