(ns mokepon.rpg)

(def new-game
  {:team-at-home []
   :team {}
   :location :outside
   :chosen-key nil
   :cash 100
   :battling nil
   :items {}
   :play-by-play ["You sit outside. You needed a break from your mother yelling at you."]})

(defn apply-to-all-values [f dict]
  (into {} (map (fn [[k v]] [k (f v)]) dict)))

(defn filter-key [predicate dict]
  (map (fn [[k v]] k)
       (filter (fn [[k v]] (predicate v)) dict)))

(defn battle-over? [chosen battling]
  (or (nil? chosen)
      (nil? battling)
      (<= (:hp chosen) 0)
      (<= (:hp battling) 0)
      (:captured battling)))

(def active-turn-threshold 1800)

(defn conj-play-by-play [game-state & strings]
  (assoc game-state
         :play-by-play
         (conj (:play-by-play game-state)
               (apply str strings))))

(defn reset-monster-at [monster]
  (assoc monster :at 0))

(defn reset-team-at [team]
  (apply-to-all-values reset-monster-at team))

(defn active-turn-percentage [{:keys [at]} monster]
  (if (>= at active-turn-threshold) 1
      (/ at active-turn-threshold)))

(defn is-dead? [monster] (<= (:hp monster) 0))

(defn can-attack? [monster]
  (and (not (is-dead? monster))
       (>= (:at monster) active-turn-threshold)))

(defn tick-monster [monster]
  (if (not (can-attack? monster))
      (assoc monster :at (+ (:at monster) (:speed monster)))
      monster))

(defn choose-monster [game-state team-key]
  (if (not= (:chosen-key game-state) team-key)
    (-> game-state
        (assoc :chosen-key team-key)
        (assoc :team (reset-team-at (:team game-state)))
        (conj-play-by-play
         "You have chosen "
         (get-in game-state [:team team-key :name])
         " to fight!"))

    game-state))

(defn chosen-monster [game-state]
  (get-in game-state [:team (get-in game-state [:chosen-key])]))

(defn item-count [game-state item-key]
  (or (get-in game-state [:items item-key]) 0))

(defn use-candy [game-state]
  (when-let [has-candy? (> (item-count game-state :candy) 0)]
    (-> game-state
        (update-in [:team (get-in game-state [:chosen-key]) :hp]
                   (fn [current-hp]
                     (let [new-hp (+ current-hp 10)
                           max-hp (:max-hp (chosen-monster game-state))]
                       (if (> new-hp max-hp) max-hp new-hp))))
        (update-in [:items :candy] #(dec (or % 0)))
        (conj-play-by-play (:name (chosen-monster game-state))
                           " has eated the delicious candy and was healed for 10 hp."))))

(defn throw-mokebox [game-state]
  (let [battling (:battling game-state)
        {:keys [max-hp hp]} battling
        capture-chance (/ (- max-hp hp) max-hp)
        roll (rand)
        captured? (> capture-chance roll)
        has-mokebox? (get-in game-state [:items :mokebox])
        game-state-with-used-mokebox (update-in game-state [:items :mokebox] dec)
        new-team (assoc (:team game-state) (:id battling) battling)]
    (if has-mokebox?
      (if captured?
        (-> game-state-with-used-mokebox
            (assoc-in [:battling :captured] true)
            (assoc :team new-team)
            (conj-play-by-play
             "The Mokébox knocks out the "
             (get-in game-state [:battling :name])
             ". It's been captured!"))

        (conj-play-by-play
         game-state-with-used-mokebox
         "The Mokébox bounces off "
         (get-in game-state [:battling :name])
         ". It's still too strong!"))

      game-state)))

(def affinities
  {[:electric  :grass] 0.5
   [:ground :electric] 2
   [:electric  :water] 2
   [:water  :electric] 1
   [:electric :ground] 0})

(defn affinity-lookup [from to]
  (let [from-type (:type from)
        to-type (:type to)]
    (or (get affinities [from-type to-type]) 1.0)))

(defn attack-damage [from to]
  (* (:power from)
     (affinity-lookup from to)))

(defn try-attack [from to]
  (if (can-attack? from)
    {:to (assoc to :hp (- (:hp to) (attack-damage from to)))
     :from (assoc from :at 0)
     :attack-occured? true}
    {:to to
     :from from
     :attack-occured? false}))

(defn attack-description [from to]
  (cond (is-dead? to)
        (str (:name to) " has fallen. Mauled and bloodied.")
        (= (affinity-lookup from to) 2)
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ". It was super effective.")
        (= (affinity-lookup from to) 0.5)
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ". It wasn't very effective.")
        (= (affinity-lookup from to) 0)
        (str  (:name to) " is immune to " (:name from) "'s attack. No damage was done.")
        :else
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ".")))

(defn apply-player-attack [chosen battling play-by-play]
  (let [{:keys [from to attack-occured?]}
        (try-attack chosen battling)]
      {:battling to
       :chosen from
       :cash-reward (if (is-dead? to) 3 0)
       :play-by-play
       (if attack-occured?
         (conj play-by-play (attack-description from to))
         play-by-play)}))

(defn tick-battle [chosen battling play-by-play]
  (let [chosen-ticked (tick-monster chosen)
        battling-ticked (tick-monster battling)
        {:keys [from to attack-occured?]}
        (try-attack battling-ticked chosen-ticked)]
    {:chosen to
     :battling from
     :play-by-play
     (if attack-occured?
         (conj play-by-play (attack-description from to))
         play-by-play)}))

(defn buy-item [game-state item-id store-items-lookup]
  (let [item (item-id store-items-lookup)
        current-cash (:cash game-state)
        afford? (>= current-cash (:cost item))
        new-cash (- current-cash (:cost item))]
    (if afford?
      (-> game-state
          (assoc :cash new-cash)
          (update-in [:items item-id]
                     #(inc (or (get-in game-state [:items item-id]) 0)))
          (conj-play-by-play
           "You take the " (:name item)
           " from the midget's saggy, squishy hand. "
           "He smiles and gives you a tip of his top hat."))
      (->
       game-state
       (conj-play-by-play
        "The midget bitch slaps you saying that you can't afford that. "
        "He wonders if you were taught common core math.")))))

(defn heal-monster [monster]
  (assoc monster :hp (:max-hp monster)))

(defn heal-team [team]
  (apply-to-all-values heal-monster team))

(defn choosable-monsters [team]
  (filter-key #(not (is-dead? %)) team))
