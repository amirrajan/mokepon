(ns mokepon.tests.shop
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.tests.core :refer [has-play-by-play
                                        get-state
                                        log
                                        make-enemy-attack-ready
                                        set-cash
                                        make-chosen-attack-ready
                                        reset-game]]
            [mokepon.monsters :as mon]
            [mokepon.rpg :as rpg]
            [mokepon.shop :as shp]
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
  (is (zero? (get-state :cash))))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (set-cash 0)
  (tnr/buy-item! :mokebox)
  (has-play-by-play
    (str "The midget bitch slaps you saying that you can't afford that. "
         "He wonders if you were taught common core math."))
  (is (zero? (tnr/item-count :mokebox)))
  (is (zero? (get-state :cash))))
