(ns mokepon.core)

(def new-game
  {:team-at-home []
   :team []
   :location :home
   :chosen nil
   :battling nil})

(defn is-battle-over [chosen battling]
  (cond (nil? chosen) true
        (nil? battling) true
        (<= (:hp chosen) 0) true
        (<= (:hp battling) 0) true
        (:captured battling) true
        :else false))

(def active-turn-threshold 1800)

(defn tick-mokepon [mokepon]
  )


;; export function tickBattle(chosen, battling, team, playByPlay) {
;;   chosen = tickPokemon(chosen);
;;   battling = tickPokemon(battling);

;;   if (battling.canAttack) {
;;     chosen.hp -= 10;
;;     battling.at -= activeTurnThreshold();
;;     battling.canAttack = false;
;;     playByPlay = playByPlay.concat(`${battling.name} attacks ${chosen.name} for 10.`);

;;     if (chosen.hp <= 0) {
;;       playByPlay = playByPlay.concat(`${chosen.name} has fallen. Mauled and bloody. Pokeguts everywhere.`);
;;       team = remove(team, chosen);
;;     }
;;   }

;;   return {
;;     chosen,
;;     battling,
;;     team,
;;     playByPlay
;;   };
;; }

;; function tickPokemon(pokemon) {
;;   if (!pokemon.canAttack) pokemon.at += pokemon.speed;

;;   if (pokemon.at >= activeTurnThreshold()) {
;;     pokemon.canAttack = true;
;;   } else {
;;     pokemon.canAttack = false;
;;   }

;;   return pokemon;
;; }
