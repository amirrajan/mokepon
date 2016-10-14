(ns mokepon.tests.messages
  (:require [cljs.test :refer-macros [deftest is testing run-tests use-fixtures]]
            [mokepon.tests.core :refer [has-play-by-play
                                        get-state
                                        log-state
                                        make-enemy-attack-ready
                                        set-cash
                                        make-chosen-attack-ready
                                        reset-game]]
            [mokepon.monsters :as mon]
            [mokepon.shop :as shop]
            [mokepon.rpg :as rpg]
            [mokepon.container :as tnr]))

(use-fixtures :each {:before reset-game})

(deftest first-message-from-mom
  "the game starts off with a message from mom"

  (let [first-message (get-state :messages 0)]
    (is (= (:text first-message)
           "Where are you? Have you found a job yet?! Come by the house. I have a Chipu for you. Maybe you can make some money with it."))

    (is (= (:from first-message) :mom))

    (is (= (:day first-message) 0))))


(deftest losing-chipu-causes-angry-mom
  "you'll get an angry messages from mommy if you lose chipu in battle"

  (reset! (tnr/app-state) (rpg/new-game))

  (tnr/remove-dead-team-members!)

  (is (= (get-state :messages 2 :text) nil))

  (reset! (tnr/app-state) (rpg/new-game))

  (tnr/take-chipu!)

  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (swap! (tnr/app-state)
         assoc-in
         [:team :sulbabaur :hp] 0)

  (swap! (tnr/app-state)
         assoc-in
         [:team :chipu :hp] 0)

  (tnr/remove-dead-team-members!)

  (let [angry-message (get-state :messages 2)]
    (is (= (angry-message :text)
           "Did your Chipu get killed? Worthless. Come by and I'll give you another one."))

    (is (= (:day angry-message) 0))

    (is (= (:from angry-message) :mom))

    (is (= (:seen? angry-message) false))))

(deftest checking-messages-marks-them-as-seen
  (is (= (tnr/app-state-new-message-count) 2))

  (tnr/view-messages!)

  (is (= (get-state :location) :messages))

  (is (= (tnr/app-state-new-message-count) 0)))


(deftest first-chipu-from-mom-yields-message-from-midget
  "only the first chipu, not after deaths"
  (reset! (tnr/app-state) (rpg/new-game))

  (tnr/take-chipu!)

  (let [midget-message (get-state :messages 1)]
    (is (= (:text midget-message)
           "Hey kid. Your mom told me that I can sell stuff to you. Come by."))

    (is (= (:day midget-message) 0))

    (is (= (:from midget-message) :midget))

    (is (= (:seen? midget-message) false))))

(deftest shop-owner-texts-of-new-items
  (let [previous-shop-items
        (shop/available-shop-items @(tnr/app-state))]
    (swap! (tnr/app-state)
           rpg/mark-captured-in-mokedex
           [:chipu
            :sulbabaur
            :deogude
            :tirsqule])

    (swap! (tnr/app-state)
           rpg/text-for-unlocked-items
           previous-shop-items
           (shop/shop-items))

    (let [midget-message (get-state :messages 2)]
      (is (= (:text midget-message)
             "Hey kid. I got some new wares for sale. Come by."))

      (is (= (:day midget-message) 0))

      (is (= (:from midget-message) :midget))

      (is (= (:seen? midget-message) false)))))
