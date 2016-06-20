# Moképon

Catching them all just got real, yo.

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

;;research this, it breaks autocompletion in clojurescript
;(add-hook 'cider-repl-mode-hook #'company-mode)
```

- In `~/.lein/profiles.clj` add the following lines:
```
{:user {:plugins [[cider/cider-nrepl "0.12.0-snapshot"]]
        :dependencies [[org.clojure/tools.nrepl "0.2.12"]]}}
```
- In a seperate buffer, run `lein deps`, then `lein repl`. You'll be
  provided with a repl prompt that gives you a host (which should be
  `127.0.0.1` and a port number.
- In emacs, first time you open a `.cljs` file run: `M-x figwheel-repl` and `M-x
  cider-connect`. You'll be prompted for a host followed by a port number.
- A process will be started which will be the figwheel repl (cider is
  used for autocompletion).
- You can use `repl.cljs` to interact with the applications (send data
  from that buffer to the process using `M-x inf-clojure-eval-last-sexp`).
- If you don't get autocompletion, make sure `cider-mode` is enabled
  for the current buffer (you may want to start and stop it again for
  good measure).


## JavaScript to ClojureScript

Here are some examples of how to mentally translate JavaScript (JSX, ES2015)
in ClojureScript.

## Defining a Function

```
function sayHello(name, otherName) {
  return `${name} says hello to ${otherName}`;
}

(defn say-hello [name other-name]
  (str name " says hello to " other-name))
```

- Names in Clojure are kebab cased as opposed to camel cased.
- Functions in Clojure implicitly return the last symbolic
  expression. Basically, the last parenthetical set.
- There are only four types of delimiters in Clojure. The token
  delimiter is a space ` `, and the block delimiter is the
  closing pair of `)`, `}`, `]`.
- Clojure's `str` function joins multiple strings together.


## Defining a Hash/Dictionary

```
function newPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName
  };
}

(defn new-person [first-name, last-name]
  {:first-name first-name
   :last-name last-name
   :full-name (str first-name " " last-name)})
```

- Dictionaries in Clojure are denoted by the `{}` literal. The key
  values are just paired items between the `{}`. You can add `,` if
  you want, but Clojure just considers `,` as white space.

## Anonymous Functions

```
function multipleAllByTwo(array) {
  return _.map(array, function(value) {
    return value * 2;
  });
}

multipleAllByTwo([1, 2, 3]); //yields [2, 4, 6]

(defn multiply-all-by-two [array]
  (map array (fn [value] (* value 2))))

(multiply-all-by-two [1 2 3]) ;;yields [2 4 6]
```

Anonymous functions can be written with the following short hand. You
can use `#()` as a short hand. Parameters named `%`, `%2`, `%3`,
etc. Here is the same `multiply-all-by-two` but using the `#()` short hand.

```
(defn multiply-all-by-two [array]
  (map array #(* % 2)))

(multiply-all-by-two [1 2 3]) ;;yields [2 4 6]
```
