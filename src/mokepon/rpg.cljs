(ns mokepon.rpg
  (:require [mokepon.locations :refer [location-monsters]]
            [mokepon.monsters :as monsters]
            [clojure.string :as string]))

(defn new-game []
  {:team-at-home []
   :team {}
   :location :outside
   :chosen-key nil
   :cash 100
   :battling nil
   :items {}
   :mokedex {:monsters
             (into [] (map #(assoc % :captured false :encountered false)
                           [monsters/chipu
                            monsters/tirsqule
                            monsters/sulbabaur
                            monsters/deogude]))}
   :play-by-play ["You sit outside. You needed a break from your mother yelling at you."]})

(defn apply-to-all-values [f dict]
  (into {} (map (fn [[k v]] [k (f v)]) dict)))

(defn filter-key [predicate dict]
  (map (fn [[k v]] k)
       (filter (fn [[k v]] (predicate v)) dict)))

(defn index-of [predicate s]
  (loop [idx 0 items s]
    (cond
      (empty? items) nil
      (predicate (first items)) idx
      :else (recur (inc idx) (rest items)))))

(defn battle-over? [chosen battling]
  (or (nil? chosen)
      (nil? battling)
      (<= (:hp chosen) 0)
      (<= (:hp battling) 0)
      (:captured battling)))

(def active-turn-threshold 1800)

(defn conj-play-by-play [game-state & strings]
  (update game-state :play-by-play conj (string/join strings)))

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
  (if-not (can-attack? monster)
    (update monster :at + (:speed monster))
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
  (when-let [has-candy? (pos? (item-count game-state :candy))]
    (-> game-state
        (update-in [:team (get-in game-state [:chosen-key]) :hp]
                   #(min (:max-hp (chosen-monster game-state)) (+ % 10)))
        (update-in [:items :candy] #(dec (or % 0)))
        (conj-play-by-play (:name (chosen-monster game-state))
                           " has eated the delicious candy and was healed for 10 hp."))))

(defn mokedex-captured [game-state monster-id]
  (let [team-monster (get-in game-state [:team monster-id])
        mokedex-monsters (get-in game-state [:mokedex :monsters])
        mokedex-index (index-of #(= monster-id (:id %)) mokedex-monsters)
        path [:mokedex :monsters mokedex-index]]
    (cond mokedex-index
          (update-in game-state
                     path
                     #(assoc % :captured true
                             :encountered true))
          :else
          (do
            (.log js/console (str "WARNING: " monster-id " not in mokedex! Update rpg/new-game to include " monster-id "."))
            game-state))))

(defn take-chipu [game-state]
  (mokedex-captured (assoc-in game-state [:team :chipu] monsters/chipu) :chipu))

(defn throw-mokebox [game-state]
  (let [battling (:battling game-state)
        {:keys [max-hp hp]} battling
        capture-chance (/ (- max-hp hp) max-hp)
        roll (rand)
        captured? (> capture-chance roll)
        has-mokebox? (get-in game-state [:items :mokebox])
        game-state-with-used-mokebox (update-in game-state [:items :mokebox] dec)
        new-team (assoc (:team game-state) (:id battling) battling)]
    (cond
      has-mokebox?
      (cond
        captured?
        (-> game-state-with-used-mokebox
            (assoc-in [:battling :captured] true)
            (assoc :team new-team)
            (conj-play-by-play
             "The Mokébox knocks out the "
             (get-in game-state [:battling :name])
             ". It's been captured!")
            (mokedex-captured (get-in game-state [:battling :id])))
        :else
        (conj-play-by-play
         game-state-with-used-mokebox
         "The Mokébox bounces off "
         (get-in game-state [:battling :name])
         ". It's still too strong!"))
      :else
      game-state)))

(def affinities
  {[:electric  :grass]    0.5
   [:ground    :electric] 2
   [:electric  :water]    2
   [:water     :electric] 1
   [:electric  :ground]   0})

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

(defn damage-description [from to]
  (cond (= (affinity-lookup from to) 2)
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ". It was super effective.")
        (= (affinity-lookup from to) 0.5)
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ". It wasn't very effective.")
        (zero? (affinity-lookup from to))
        (str  (:name to) " is immune to " (:name from) "'s attack. No damage was done.")
        :else
        (str (:name from) " attacks " (:name to) " for " (attack-damage from to) ".")))

(defn attack-description [from to]
  (cond (is-dead? to)
        [(damage-description from to) (str (:name to) " has fallen. Mauled and bloodied.")]
        :else
        [(damage-description from to)]))

(defn apply-player-attack [chosen battling play-by-play]
  (let [{:keys [from to attack-occured?]}
        (try-attack chosen battling)]
      {:battling to
       :chosen from
       :cash-reward (if (is-dead? to) 3 0)
       :play-by-play
       (if attack-occured?
         (apply conj play-by-play (attack-description from to))
         play-by-play)}))

(defn attack-result-play-by-play [attack-result play-by-play]
  (let [{:keys [from to attack-occured?]} attack-result
        attack-description (attack-description from to)]
    (if attack-occured?
      (apply conj play-by-play attack-description)
      play-by-play)))

(defn choosable-monsters [team]
  (filter-key #(not (is-dead? %)) team))

(defn first-live-team-member [game-state]
  (first (choosable-monsters (:team game-state))))

(defn auto-swap-team-member [game-state]
  (let [chosen (chosen-monster game-state)
        live-member-key (first-live-team-member game-state)
        live-monster-name (get-in game-state
                                  [:team live-member-key :name])
        need-to-auto-swap (and (is-dead? chosen) live-member-key)]
    (if need-to-auto-swap
      (-> game-state
          (conj-play-by-play live-monster-name " dashes into battle!")
          (assoc :chosen-key live-member-key))
      game-state)))

(defn tick-battle [game-state]
  (let [chosen-ticked (-> game-state chosen-monster tick-monster)
        battling-ticked (-> game-state :battling tick-monster)
        {:keys [from to] :as attack-result}
        (try-attack battling-ticked chosen-ticked)
        new-play-by-play
        (attack-result-play-by-play attack-result
                                    (:play-by-play game-state))
        need-to-auto-swap (and (is-dead? to))]
    (-> game-state
        (assoc :battling from
               :play-by-play new-play-by-play)
        (assoc-in [:team (:chosen-key game-state)] to)
        auto-swap-team-member)))

(defn dead-team-member-keys [game-state]
  (->> (:team game-state)
       (filter (fn [[_ v]] (is-dead? v)))
       (map (fn [[k _]] k))))

(defn remove-dead-team-members [game-state]
  (let [dead-keys (dead-team-member-keys game-state)
        new-state (update-in game-state
                             [:team]
                             #(apply dissoc % dead-keys))]
    (reduce mokedex-captured new-state dead-keys)))

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
           "You take the " (:name item) " from the midget's saggy, squishy hand. "
           "He smiles and gives you a tip of his top hat."))

      (-> game-state
          (conj-play-by-play
           "The midget bitch slaps you saying that you can't afford that. "
           "He wonders if you were taught common core math.")))))

(defn heal-monster [monster]
  (assoc monster :hp (:max-hp monster)))

(defn heal-team [game-state]
  (let [sleep-message (if (pos? (count (:team game-state)))
                        "You've slept. Your posse has been healed."
                        "You've slept.")]
    (-> game-state
        (conj-play-by-play sleep-message)
        (assoc :team
               (apply-to-all-values
                heal-monster
                (:team game-state))))))

(defn mokedex-encountered [game-state monster-id]
  (let [mokedex-monsters (get-in game-state [:mokedex :monsters])
        mokedex-index (index-of #(= monster-id (:id %)) mokedex-monsters)
        path [:mokedex :monsters mokedex-index]]
    (cond mokedex-index
          (update-in game-state
                     path
                     #(assoc % :encountered true))
          :else (do
                  (.log js/console (str "WARNING: " monster-id " not in mokedex! Update rpg/new-game to include " monster-id "."))
                  game-state))))

(defn set-battle [game-state chosen-key battling]
  (-> game-state
      (assoc
       :chosen-key chosen-key
       :battling battling)
      (conj-play-by-play
       "It has begun! " (get-in game-state [:team chosen-key :name])
       " vs " (:name battling) "!")
      (mokedex-encountered (:id battling))))

(defn find-trouble [game-state]
  (let [team (:team game-state)
        location (:location game-state)
        first-team-member (first-live-team-member game-state)
        monster-for-location (location location-monsters)]
    (cond
      (empty? team)
      game-state

      monster-for-location
      (set-battle game-state
                  first-team-member
                  monster-for-location))))
