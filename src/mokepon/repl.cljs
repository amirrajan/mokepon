(ns mokepon.core)

(defn repl-foo []
  (battle-over? nil nil)
  (reset! app-state mokepon.rpg/new-game)
  (.alert js/window "hodor")
  (on-take-chikapu app-state)
  ((on-go-to-location app-state) :forest)
  (on-find-trouble app-state)
  (on-tick-battle-core app-state)
  )

  (swap!
   app-state
   merge
   (mokepon.rpg/tick-battle
    (:chosen @app-state)
    (:battling @app-state)))

(.setTimeout js/window #(.log js/console "hodor") 1000)
