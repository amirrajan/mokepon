(ns mokepon.core)
(reset! app-state new-game)
(on-take-chikapu app-state)

(empty? [])

(:location @app-state)

((on-go-to-location app-state) :forest)
((on-go-to-location app-state) :home)
