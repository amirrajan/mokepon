(ns mokepon.rpg)

(def new-game
  {:team-at-home []
   :team []
   :location :home
   :chosen nil
   :battling nil
   :play-by-play []})

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

(defn can-attack? [monster]
  (>= (:at monster) active-turn-threshold))

(defn is-dead? [monster] (<= (:hp monster) 0))

(defn tick-monster [monster]
  (if (not (can-attack? monster))
      (merge monster {:at (+ (:at monster) (:speed monster))})
      monster))

(defn try-attack [from to]
  (if (can-attack? from)
      {:to (merge to {:hp (- (:hp to) 10)})
       :from (merge from {:at 0})
       :attack-occured? true}
      {:from from :to to :attack-occured? false}))

(defn play-by-play-for [attacker target]
  (if (is-dead? target)
    (str (:name target) " has fallen. Mauled and bloody.")
    (str (:name attacker) " attacks " (:name target) " for 10.")))

(defn apply-player-attack [chosen battling play-by-play]
  (let [{:keys [from to attack-occured?]}
        (try-attack chosen battling)]
      {:battling to
       :chosen from
       :play-by-play
       (if attack-occured?
         (conj play-by-play (play-by-play-for from to))
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
         (conj play-by-play (play-by-play-for from to))
         play-by-play)}))
