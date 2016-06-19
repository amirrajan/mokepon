# Moképon

Catching them all just got real.

## Running The Game

- Install Java 8 (1.8 sdk).
- Install [Leiningen](http://leiningen.org/).
- Install rlwrap (`brew install rlwrap`).
- Clone repo.
- Nav to root directory.
- Run `lein deps`.
- Run `rlwrap lein figwheel`
- Open `index.html` in Chrome.

### Running The Game + Emacs

- Instead of running `rlwrap lein figwheel`, do the following.
- Install plugins: `cider`, `inf-clojure`, and `company-mode`.
- Throw these lines in your `init.el`:

```

(add-hook
 'clojurescript-mode-hook
 (lambda ()
   (progn
     (show-paren-mode)
     (paredit-mode)
     (modify-syntax-entry ?- "w"))))

(defun figwheel-repl ()
  (interactive)
  (run-clojure "lein figwheel"))

;;research this, it breaks autocompletion
in clojurescript
;(add-hook 'cider-repl-mode-hook #'company-mode)
```

- First time you open a `.cljs` file run: `M-x figwheel-repl` and `M-x
  cider-jack-in-clojurescript`
- An process will be started which will be the figwheel repl (cider is
  used for autocompletion).
- You can use `repl.cljs` to interact with the applications (send data
  from that buffer to the process using `M-x inf-clojure-eval-last-sexp`.
