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
  (has-play-by-play "Bought Mokébox.")
  (is (= (tnr/item-count :mokebox) 1))
  (is (zero? (get-state :cash))))

(deftest not-enough-cash-to-buy-item
  "can't buy item if you don't have the cash"
  (set-cash 0)
  (tnr/buy-item! :mokebox)
  (has-play-by-play
    "Can't afford.")
  (is (zero? (tnr/item-count :mokebox)))
  (is (zero? (get-state :cash))))
