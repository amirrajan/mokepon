(ns mokepon.tests
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest test-numbers
  (is (= 1 2)))

(cljs.test/run-tests)
