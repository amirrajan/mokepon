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

(defn heal-monster [monster]
  (assoc monster :hp (:max-hp monster)))

(defn reset-monster-at [monster]
  (assoc monster :at 0))

(defn reset-team-at [team]
  (apply-to-all-values reset-monster-at team))

(defn heal-team [team]
  (apply-to-all-values heal-monster team))

(defn choosable-monsters [team]
  (filter-key #(not (is-dead? %)) team))
