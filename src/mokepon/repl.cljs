(ns mokepon.core
  (:require [mokepon.rpg :refer [new-game]]))

(defn repl-foo []
  (reset! app-state new-game)
  (on-take-chikapu app-state)
  (.alert js/window "hodor")
  ((on-go-to-location app-state) :forest)
  (on-find-trouble app-state))
