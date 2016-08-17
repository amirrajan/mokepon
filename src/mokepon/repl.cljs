(ns mokepon.container)

(comment
  (reset! (app-state) mokepon.rpg/new-game)
  (take-chipu!)
  (set-cash! 1000)
  (buy-item! :candy)
  (buy-item! :mokebox)
  (go-to-location! :outside)
  (go-to-location! :forest))
