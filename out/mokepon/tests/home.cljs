(ns mokepon.tests.home
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.tests.core :refer [has-play-by-play
                                        get-state
                                        make-enemy-attack-ready
                                        set-cash
                                        make-chosen-attack-ready
                                        reset-game]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.container :as tnr]))

(use-fixtures :each {:before reset-game})

(deftest healing-team
  "anyone with low hp is healed to max"
  (swap!
   (tnr/app-state)
   assoc
   :team
   {:chipu   {:hp 10 :max-hp 50}
    :deogude {:hp 5  :max-hp 100}})

  (tnr/sleep-at-home!)

  (has-play-by-play "Slept. Team has been healed.")

  (is (= (get-state :team)
         {:chipu {:hp 50   :max-hp 50}
          :deogude {:hp 100  :max-hp 100}})))
