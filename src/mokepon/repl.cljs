(ns mokepon.core)

(defn go-find-trouble-in [location]
  (reset! app-state mokepon.rpg/new-game)
  (on-take-chikapu)
  ((on-go-to-locatio) location)
  (on-find-trouble))

(defn repl []
  (go-find-trouble-in :forest)
  (on-attack))

(mokepon.rpg/can-attack? (chosen-monster))
(mokepon.rpg/battle-over? (chosen-monster) (:battling @app-state))
