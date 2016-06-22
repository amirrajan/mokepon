(ns mokepon.core)

(defn repl-foo []
  (merge mokepon.monsters/chikapu
         {:at (+ (:at mokepon.monsters/chikapu)
                 (:speed mokepon.monsters/chikapu))})
  (battle-over? nil nil)
  (reset! app-state mokepon.rpg/new-game)
  (.alert js/window "hodor")
  (on-take-chikapu app-state)
  ((on-go-to-location app-state) :forest)
  (on-find-trouble app-state))
