(ns mokepon.tests.battle
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

(deftest being-attacked
  "begin attacked by enemy monster lowers the chosen mokepon's hp"
  (tnr/set-battle! :chipu mon/sulbabaur)
  (has-play-by-play "It has begun! Chipu vs Sulbabaur!")
  (make-enemy-attack-ready)
  (tnr/tick-battle-core!)
  (is (= (:hp (tnr/app-state-chosen-monster)) 40)))

(deftest being-killed
  "being killed by enemy monster removes chosen mokepon form the team"
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (swap! (tnr/app-state)
         assoc-in
         [:team :sulbabaur :hp] 0)

  (swap! (tnr/app-state)
         assoc-in
         [:team :chipu :hp] 0)

  (tnr/remove-dead-team-members!)

  (is (= (tnr/team-count) 0)))

(deftest capturing-wild-mokepon
  "attempting to capture wild mokepon decrements mokeboxes"
  (set-cash 20)
  (tnr/set-battle! :chipu mon/sulbabaur)
  (is (= (tnr/item-count :mokebox) 0))
  (tnr/throw-mokebox!)
  (is (= (tnr/item-count :mokebox) 0))

  ;;buy two mokeboxes
  (tnr/buy-item! :mokebox)
  (tnr/buy-item! :mokebox)
  (is (= (tnr/item-count :mokebox) 2))

  ;;capture probability is based on hp of monster
  ;;monsters at full health have 0% of being captured
  (tnr/throw-mokebox!)
  (is (= (get-state :team :sulbabaur)
         nil))
  (is (= (tnr/item-count :mokebox) 1))

  ;;capture probability is based on hp of monster
  ;;setting max-hp to hp ratio really really high
  (swap! (tnr/app-state) assoc-in [:battling :max-hp] 100000000)
  (tnr/throw-mokebox!)
  (is (= (get-state :team :sulbabaur)
         (dissoc (get-state :battling) :captured)))

  (is (= (tnr/item-count :mokebox) 0)))

(deftest battle-is-over-if-mokepon-is-captured
  "capturing a monster ends battle"
  (tnr/buy-item! :mokebox)
  (tnr/set-battle! :chipu mon/sulbabaur)
  ;;since the capture propbablity is based off of current hp
  ;;and max hp, set the max hp to a really large number to
  ;;pretty much gurantee a capture
  (swap! (tnr/app-state) assoc-in [:battling :max-hp] 100000000)
  (tnr/throw-mokebox!)
  (is (= (rpg/battle-over?
          (get-state :team :chipu)
          (get-state :battling)) true)))

(deftest using-candy
  "when using candy your mokepon gains health"
  (tnr/buy-item! :candy)
  (is (= (tnr/item-count :candy) 1))
  (tnr/set-battle! :chipu mon/deogude)
  (make-enemy-attack-ready)
  (tnr/tick-battle-core!)
  (is (= (get-state :team :chipu :hp) 30))
  (tnr/use-candy!)
  (has-play-by-play "Chipu has eated the delicious candy and was healed for 10 hp.")
  (is (= (tnr/item-count :candy) 0))
  (is (= (get-state :team :chipu :hp) 40)))

(deftest using-candy-max-hp
  "using candy doesn't over heal"
  (tnr/buy-item! :candy)
  (is (= (tnr/item-count :candy) 1))
  (tnr/set-battle! :chipu mon/deogude)
  (tnr/use-candy!)
  (has-play-by-play "Chipu has eated the delicious candy and was healed for 10 hp.")
  (is (= (tnr/item-count :candy) 0))
  (is (= (get-state :team :chipu :hp) 50)))

(deftest choosing-mokepon-within-battle
  "only live mokepon can be chosen, AT is reset when chosen"
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (tnr/go-to-location! :forest)
  (tnr/find-trouble! false)
  (is (= (rpg/choosable-monsters (get-state :team)) [:chipu :sulbabaur]))
  (swap! (tnr/app-state) assoc-in [:team :chipu :at] rpg/active-turn-threshold)
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur :at] rpg/active-turn-threshold)
  (tnr/choose-monster! :sulbabaur)
  (is (= (get-state :chosen-key) :sulbabaur))
  (is (= (get-state :team :chipu :at) 0))
  (is (= (get-state :team :sulbabaur :at) 0))
  (has-play-by-play "You have chosen Sulbabaur to fight!")


  ;;choosing currently chosen monster doesn't do anything
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur :at] rpg/active-turn-threshold)
  (tnr/choose-monster! :sulbabaur)
  (is (= (get-state :team :sulbabaur :at) rpg/active-turn-threshold)))

(deftest looking-for-trouble-chooses-first-monster-on-team
  (swap! (tnr/app-state) update-in [:team] #(dissoc % :chipu))
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (tnr/go-to-location! :forest)
  (tnr/find-trouble! false)
  (is (= (tnr/app-state-chosen-monster) (get-state :team :sulbabaur))))

(deftest battle-doesnt-end-until-all-of-team-is-dead
  (swap! (tnr/app-state) assoc-in [:team :sulbabaur] mon/sulbabaur)
  (tnr/go-to-location! :forest)
  (tnr/find-trouble! false)
  (make-enemy-attack-ready)

  ;;make enemy's attack super powerful
  (swap! (tnr/app-state)
         assoc-in [:battling :power]
         100)

  ;;let AI perform killing blow
  (tnr/tick-battle-core!)
  (is (= (rpg/is-dead? (get-state :team :chipu)) true))

  ;;tick again and see that monster has been swapped out
  (tnr/tick-battle-core!)
  (has-play-by-play "Sulbabaur dashes into battle!"))

(deftest winning-battle-gives-fiddy
  "when winning battle you receive 3 fiddy"
  (set-cash 0)
  (tnr/set-battle! :chipu mon/sulbabaur)
  (make-chosen-attack-ready)
  (swap! (tnr/app-state)
         assoc-in
         [:team :chipu :power]
         50)
  (tnr/attack!)
  (is (= (get-state :cash) 0))
  (make-chosen-attack-ready)
  (tnr/attack!)
  (is (rpg/is-dead? (get-state :battling)))
  (is (= (get-state :cash) 3)))
