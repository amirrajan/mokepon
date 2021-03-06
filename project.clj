(defproject mokepon "0.1.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.76"]
                 [cljsjs/react "15.2.1-1"]
                 [cljsjs/react-dom "15.2.1-1"]
                 [sablono "0.7.5"]
                 [alandipert/storage-atom "2.0.1"]]
  :plugins [[lein-figwheel "0.5.0-1"]
            [lein-cljsbuild "1.1.3"]]
  :source-paths ["src"]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.2"]]
                   :source-paths ["cljs_src" "dev"]}}
  :clean-targets [:target-path "out"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:output-to "mokepon-dev.js"
                                   :output-dir "out-dev"
                                   :optimizations :none
                                   :source-map true
                                   :pretty-print true
                                   :main mokepon.core}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "mokepon.js"
                                   :output-dir "out"
                                   :main mokepon.core}}]}
  :figwheel {:css-dirs ["css"]})
