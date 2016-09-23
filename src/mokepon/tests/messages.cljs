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

  (is (= (get-state :messages 1 :text) nil))

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

  (let [angry-message (get-state :messages 1)]
    (is (= (get-state :messages 1 :text)
           "Did your Chipu get killed? Worthless. Come by and I'll give you another one."))

    (is (=(get-state :messages 1 :day) 0))

    (is (=(get-state :messages 1 :from) :mom))

    (is (= (get-state :messages 1 :seen?) false))))

(deftest checking-messages-marks-them-as-seen
  (is (= (tnr/app-state-new-message-count) 1))

  (tnr/view-messages!)

  (is (= (get-state :location) :messages))

  (is (= (tnr/app-state-new-message-count) 0)))
