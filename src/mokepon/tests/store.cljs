(ns mokepon.tests.store
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.tests.core :refer [has-play-by-play
                                        get-state
                                        make-enemy-attack-ready
                                        set-cash
                                        make-chosen-attack-ready
                                        reset-game]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.items :as itm]
            [mokepon.container :as tnr]))

(use-fixtures :each {:before reset-game})

(deftest purchasing-item
  "purchasing item decrements cash"
  (set-cash 10)
  (tnr/buy-item! :mokebox)
  (has-play-by-play
    (str "You take the Mokébox "
         "from the midget's saggy, squishy hand. "
         "He smiles and gives you a tip of his top hat."))
  (is (= (tnr/item-count :mokebox) 1))
  (is (= (get-state :cash) 0)))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (set-cash 0)
  (tnr/buy-item! :mokebox)
  (has-play-by-play
    (str "The midget bitch slaps you saying that you can't afford that. "
         "He wonders if you were taught common core math."))
  (is (= (tnr/item-count :mokebox) 0))
  (is (= (get-state :cash) 0)))
