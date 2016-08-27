(ns mokepon.tests.mokedex
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

(deftest mokedex-captured-encountered
  "after mom gives chipu it is considered captured and encountered,
   once killed, it is still considered captured and encountered."

  (is (= (get-state :mokedex :monsters 0 :id)
         :chipu))

  (is (= (get-state :mokedex :monsters 0 :encountered)
         true))

  (is (= (get-state :mokedex :monsters 0 :captured)
         true))

  ;;kill chipu
  (swap! (tnr/app-state) assoc-in [:team :chipu :hp] 0)
  (tnr/remove-dead-team-members!)

  (is (= (get-state :mokedex :monsters 0 :encountered)
         true))

  (is (= (get-state :mokedex :monsters 0 :captured)
         true)))

(deftest mokedex-battle-encountered
  "a battle with a mokepon marks it as encountered"

  (tnr/set-battle! :chipu mon/sulbabaur)

  (is (= (get-state :mokedex :monsters 2 :encountered)
         true))

  (is (= (get-state :mokedex :monsters 2 :captured)
         false)))

(deftest capturing-mokepon-show-up-in-mokedex
  "capturing a moster with a mokebox marks it as caputured"
  (set-cash 20)
  (tnr/set-battle! :chipu mon/sulbabaur)

  (tnr/buy-item! :mokebox)

  ;;capture probability is based on hp of monster
  ;;setting max-hp to hp ratio really really high
  (swap! (tnr/app-state) assoc-in [:battling :max-hp] 100000000)
  (tnr/throw-mokebox!)

  (is (= (get-state :mokedex :monsters 2 :id)
         :sulbabaur))

  (is (= (get-state :mokedex :monsters 2 :encountered)
         true))

  (is (= (get-state :mokedex :monsters 2 :captured)
         true)))
