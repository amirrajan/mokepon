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
- Install plugins: `cider`, `company-mode`.
- Throw these lines into your `init.el`:

```elisp
(add-hook 'cider-repl-mode-hook #'company-mode)

(add-hook
 'clojurescript-mode-hook
 (lambda ()
   (progn
     (show-paren-mode)
     (paredit-mode)
     (modify-syntax-entry ?- "w"))))

(defun user/cider-send-to-repl ()
  (interactive)
  (let ((s (buffer-substring-no-properties
            (nth 0 (cider-last-sexp 'bounds))
            (nth 1 (cider-last-sexp 'bounds)))))
    (with-current-buffer (cider-current-connection)
      (insert s)
      (cider-repl-return))))
```

- In `~/.lein/profiles.clj` add the following lines:
```clojure
{:user {:plugins [[cider/cider-nrepl "0.12.0-snapshot"]]
        :dependencies [[org.clojure/tools.nrepl "0.2.12"]]}}
```
- In Emacs, first time you open a `.cljs` file run: `M-x cider-jack-in-clojurescript`.
- You can use `repl.cljs` to interact with the applications.
- To send a block to the browser use `M-x user/cider-send-to-repl`.
- To view the output of a block within in Emacs use `M-x cider-eval-last-sexp`.
- If you don't get autocompletion, make sure `cider-mode` is enabled
  for the current buffer (you may want to start and stop it again for
  good measure).

## JavaScript to ClojureScript

Here are some examples of how to tally translate ES2016 + JSX
to ClojureScript + Sablono.

## Defining a Function

```javascript
function sayHello(name, otherName) {
  return `${name} says hello to ${otherName}`;
}
```

```clojure
(defn say-hello [name other-name]
  (str name " says hello to " other-name))
```

- Names in ClojureScript are `kebab-cased` as opposed to `camelCased`.
- Functions in ClojureScript implicitly return the last symbolic
  expression (an sexp is basically the last parenthetical set).
- There are only four types of delimiters in Clojure. The token
  delimiter is a space ` `, and the block delimiter can be any
  closing pair: `)`, `}`, `]`.
- Clojure's `str` function joins multiple strings together.
- You really need to get used to editing with plugins similar to
  `paredit`. Balancing parenthesis are not fun, using a plugin will
  make _manipulating_ s-expressions trivial (lisp dialects are _not_
  about _not_ about manipulating closing parens):
  - Emacs had `paredit` built in.
  - [Vim](https://github.com/vim-scripts/paredit.vim)
  - [Sublime Text](https://github.com/odyssomay/paredit)
  - [Atom](https://atom.io/packages/lisp-paredit)

## Defining a Hash/Dictionary

```javascript
function newPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName
  };
}
```

```clojure
(defn new-person [first-name, last-name]
  {:first-name first-name
   :last-name last-name
   :full-name (str first-name " " last-name)})
```

- Dictionaries in Clojure are denoted by the `{}` literal. The key
  values are just _paired items_ between the `{}` (you'll get a
  compiler error if you have a `{}` with an odd number of itimes). You
  can add `,` if you want, but ClojureScript just considers `,` as
  whitespace. - For accessing dictionary values: in JavaScript you
  would do `person.firstName`, in ClojureScript it's `(:first-name
  person)`.

## Anonymous Functions

```javascript
function multipleAllByTwo(array) {
  return _.map(array, function(value) {
    return value * 2;
  });
}

multipleAllByTwo([1, 2, 3]); //yields [2, 4, 6]
```

```clojure
(defn multiply-all-by-two [array]
  (map array (fn [value] (* value 2))))

(multiply-all-by-two [1 2 3]) ;;yields [2 4 6]
```

Anonymous functions can be written with the following shorthand. You
can use `#()` instead of `(fn [arg1 arg2])`. Parameters names for the
`#()` short hand are `%`, `%2`, `%3`, etc. Here is the same
`multiply-all-by-two` but using the `#()` shorthand.

```clojure
;;before
(defn multiply-all-by-two [array]
  (map array (fn [value] (* value 2))))

;;after
(defn multiply-all-by-two [array]
  (map array #(* % 2)))

(multiply-all-by-two [1 2 3]) ;;yields [2 4 6]
```

## JavaScript Interop

```javascript
window.alert("hodor");
console.log("hodor");
console.log({ a: "value 1", b: "value 2"});
```

```clojure
(.alert js/window "hodor")
(.log js/console "hodor")
(.log js/console (clj->js #{a: "value 1" b: "value 2"}))
```

All interop is under the `js/` prefix. You have to use `clj->js` to
convert from a Clojure data structure to a JavaScript data
structure. You wont be doing this often, but it's good to know.

## ES2015 Classes + JSX vs Namespaced Functions + Sablono

```javascript
import { Component } from 'react';

export class PeopleView extends Component {
  sayHello() { console.log('Hello'); }

  renderPerson(person) {
    return (
      <div>
        <p>{person.firstName} {person.lastName}</p>
        <a href="#" onClick={this.sayHello.bind(this)}>Say Hello</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPerson(this.props.person1)}
        {this.renderPerson(this.props.person2)}
      </div>
    );
  }
}

<PeopleView
  person1={{firstName: "Jane", lastName: "Doe"}}
  person2={{firstName: "John", lastName: "Doe"}}
/>
```

Here is the ClojureScript version using a library called Sablono
(the library converts arrays of elements into React components).

```clojure
(ns people-view
  (:require [sablono.core :as sab])

(defn say-hello []
  (.log js/console "Hello"))

(defn person-view [person]
  [:div
    [:p (str (:first-name person) " " (:last-name person))]
    [:a {:href "#" :on-click say-hello} "Say Hello"]])

(defn people-view [person-1 person-2]
  (sab/html
    [:div
      (render-person person-1)
      (render-person person-2)]))

(people-view
  {:first-name "Jane" :last-name "Doe"}
  {:first-name "John" :last-name "Doe"})
```
