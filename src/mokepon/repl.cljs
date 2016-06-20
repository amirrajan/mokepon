(ns mokepon.core)
(reset! app-state new-game)
(on-take-chikapu app-state)
((on-go-to-location app-state) :forest)
(on-find-trouble app-state)

(empty? [])

(:location @app-state)

((on-go-to-location app-state) :canyon)
((on-go-to-location app-state) :home)
(.alert js/window "todo")

(swap! app-state update-in [:chosen] (fn [_] chikapu))
(swap! app-state update-in [:battling] (fn [_] sulbabaur))

(swap! app-state (fn [v] (update-in (update-in v [:chosen] (fn [_] chikapu)) [:battling] (fn [_] sulbabaur))))


(reduce * [1 2 3])

(update-in (update-in {:a 1 :b 2} [:a] (fn [_] 9)) [:b] (fn [_] 6))




(set-battle @app-state chikapu sulbabaur)

(swap! app-state (fn [state] (set-battle state chikapu sulbabaur)))

app-state

(merge {:a 2 :b 3} {:a 5 :b 6 :c 9})
