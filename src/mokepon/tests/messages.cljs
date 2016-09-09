(ns mokepon.tests.messages
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

(deftest first-message-from-mom
  "the game starts off with a message from mom"

  (is (= (get-state :messages :mom 0 :text)
         "Where are you? Have you found a job yet?!"))

  (is (=(get-state :messages :mom 0 :day) 0)))


(deftest losing-chipu-causes-angry-mom
  "you'll get an angry messages from mommy if you have no team"

  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (swap! (tnr/app-state)
         assoc-in
         [:team :sulbabaur :hp] 0)

  (swap! (tnr/app-state)
         assoc-in
         [:team :chipu :hp] 0)

  (tnr/remove-dead-team-members!)

  (is (= (get-state :messages :mom 1 :text)
         "You lost all of your Moképon didn't you? Worthless. Come by and I'll give you another Chipu."))

  (is (=(get-state :messages :mom 1 :day) 0)))
