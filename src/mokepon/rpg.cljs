(ns mokepon.rpg)

(def new-game
  {:team-at-home []
   :team []
   :location :home
   :chosen nil
   :battling nil})

(defn battle-over? [chosen battling]
  (cond (nil? chosen) true
        (nil? battling) true
        (<= (:hp chosen) 0) true
        (<= (:hp battling) 0) true
        (:captured battling) true
        :else false))

(def active-turn-threshold 1800)

(defn active-turn-percentage [monster]
  (if (>= (:at monster) active-turn-threshold) 1
      (/ (:at monster) active-turn-threshold)))

(defn can-attack? [monster]
  (>= (:at monster) active-turn-threshold))

(defn is-dead? [monster] (<= (:hp monster) 0))

(defn tick-monster [monster]
  (if (not (can-attack? monster))
    (merge monster {:at (+ (:at monster) (:speed monster))})
    monster))

(defn apply-ai-attack [chosen battling]
  (if (can-attack? battling)
    {:chosen (merge chosen {:hp (- (:hp chosen) 10)})
     :attack-occured? true}
    {:chosen chosen :attack-occured? false}))

(defn tick-battle [chosen battling]
  (let [chosen-ticked (tick-monster chosen)
        battling-ticked (tick-monster battling)
        battle-result (apply-ai-attack chosen-ticked
                                       battling-ticked)]
    {:chosen (:chosen battle-result)
     :battling battling-ticked
     :play-by-play
     (cond (is-dead? (:chosen battle-result))
           (str (:name chosen)
                " has fallen. Mauled and bloody.")
           (:attack-occured? battle-result)
           (str (:name battling)
                " attacks "
                (:name chosen)
                " for 10."))}))
