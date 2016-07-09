# Moképon

Catching 'em all just got real, yo.

An RPG about catching monsters IRL. Written in React and ClojureScript.

## Running The Game

- Install Java 8 (1.8 sdk).
- Install [Leiningen](http://leiningen.org/).
- Install rlwrap (`brew install rlwrap`).
- Clone repo.
- Nav to root directory.
- Run `lein deps`.
- Run `rlwrap lein figwheel`
- Open `index.html` in Chrome.
- Then `touch src/mokepon/core.cljs`.

### Running The Game + Emacs

- Instead of running `rlwrap lein figwheel`, do the following.
- Install plugins: `cider`, `company-mode`.
- Throw these lines into your `init.el`:

```elisp
(add-hook 'cider-repl-mode-hook #'company-mode)

(setq cider-cljs-lein-repl
      "(do (require 'figwheel-sidecar.repl-api)
           (figwheel-sidecar.repl-api/start-figwheel!)
           (figwheel-sidecar.repl-api/cljs-repl))")

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
{:user {:plugins [[cider/cider-nrepl "0.12.0-SNAPSHOT"]]
        :dependencies [[org.clojure/tools.nrepl "0.2.12"]]}}
```
- In Emacs, first time you open a `.cljs` file run: `M-x cider-jack-in-clojurescript`.
- You can use `repl.cljs` to interact with the applications.
- To send a block to the browser use `M-x user/cider-send-to-repl`.
- To view the output of a block within in Emacs use `M-x cider-eval-last-sexp`.
- If you don't get autocompletion, make sure `cider-mode` is enabled
  for the current buffer (you may want to start and stop it again for
  good measure).

## A Moment of Shock

>Gasp! You're using a lisp dialect?! Are you insane??? Do you not see all
>those parenthesis?!

Watch this video: [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy)

And this one: [Value of Values](https://www.infoq.com/presentations/Value-Values)

And this one: [Design, Composition, and Performance](https://www.infoq.com/presentations/Design-Composition-Performance)

If the ideas presented in these videos don't jibe with you, then
hacking on this super awesome game probably isn't for you.

>I don't have time to watch three hours of videos. Give me the short
>version.

Fine, it comes down to a few questions really.

### First Question

How do you perceive JavaScript? A language that is `function`
oriented or `class` oriented (you'll notice that I didn't say object
oriented)?

The current JavaScript landscape splits it into two
philosophies.

>JavaScript is a terrible class oriented language that needs to be improved.

and

>JavaScript is a terrible function oriented language that needs to be improved.

For those that want JavaScript to be a `class` oriented language, they want:

```
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function() {
    console.log(this.firstName, this.lastName, ' says hello.');
  }
}

var person = new Person('John', 'Doe');
person.sayHello();
```

to look like this instead:

```
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(this.firstName, this.lastName, ' says hello.');
  }
}

let person = new Person('John', 'Doe');
person.sayHello();
```

For those that want JavaScript to be a `function` oriented language, they want:

```
function sayHello(person) {
  console.log(this.firstName, this.lastName, ' says hello.');
}

var person = { firstName: 'John', lastName: 'Doe' };
sayHello(person);
```

But with some guarantees about the mutability of objects:

```
function sayHello(person) {
  console.log(this.firstName, this.lastName, ' says hello.');
}

//wrapping this hash in `immutable` ensures that sayHello cannot
//change the properties of the person hash.
let person = immutable({ firstName: 'John', lastName: 'Doe' });
sayHello(person);
```

So. Given this, if you answered with an unwavering "JavaScript should
be `class` oriented," then working in ClojureScript probably isn't for
you. But, you should really read up on the benefits of functional
programming (and in this case, take some time to watch the three hours
worth of video). If you're _still_ hesitant on spending three hours
of your life watching videos, this
[blog entry](http://leongersing.tumblr.com/post/11561298378/my-perception-of-coffeescript)
by Leon Gersing goes into detail about forcing JavaScript to be a
class oriented language. Specifically:

>That's it. Now, I know what you're thinking, "Leon, please,
>[the class oriented example] is contrived and doesn't represent real
>world domains." You're right and so is [my function oriented example]
>as a result. "But you also didn't create real domain models." Also
>right, because I didn't have do, nor would I ever want to. Therein
>lies my point.

>Sometimes a struct is a struct and not an class. The
>difference that I'm desperately trying to convey in this overly
>simple context is that by leveraging FP over OO (he really means
>class oriented, not OO) one can provide not only a more dependable
>abstraction but when combined with JavaScript's inherent flexibility
>as a language, we can achieve true referential transparency and
>polymorphism.

and also:

>FP encourages building small functions that do not mutate state and
>can be bound together as needed to perform a task whereas the OO
>[class oriented] philosophy is to encapsulate and achieve
>polymorphism through interface or contract. The more dynamic your
>context the more OO's [class oriented] encapsulation paradigm, as
>seen in the inheritance model, leaks..

### Second Question

How do you perceive languages in general? Do you prefer:

- Static, strongly typed?
- Dynamic, strongly typed?
- Dynamic, weakly typed?
- Static, weakly typed?

ClojureScript is dynamic, strongly typed (specifically through the
use of `protocols`). The whole [static vs dynamic](http://www.craigstuntz.com/posts/2016-06-18-static-vs-dynamic-wrong-question.html) debate has been going
on for a while ([and only occasionally scientifically tested](https://vimeo.com/74354480)), so I'll skip that and just give you example languages that
fall into each category.

- Functional, Static, Strong: Haskell, Elm, F#, PureScript, Fable, ScalaZ
- Functional, Dynamic, Strong: ClojureScript, Clojure, Elixir
- Functional, Dynamic, Weak: ES5, Perl
- Functional, Static, Weak: lol iono
- Class, Dynamic, Weak: ES6, CoffeeScript
- Class, Dynamic, Strong: Ruby, Python
- Class, Static, Strong: C#, Java, TypeScript, Scala
- Class, Static, Weak: C

There are many other examples (even the list above has languages that
are multiparadigm), but I hope that gives some clarity to language
preference. Made your decision/observations? Great!

### Bottom Line

You've watched the videos, read that blog entry by Leon, and have had
heated debates about static vs dynamic on assorted public forums. After all
of that, if you still feel that JavaScript is philosophically class
oriented (and in fact should become a static, class oriented language),
then writing ClojureScript is definitely not for you.

Aside: [React's](https://facebook.github.io/react/blog/2013/06/05/why-react.html)
approach to client side view generation is consistent with functional
programming languages:

>When your component is first initialized, the render method is
>called, generating a lightweight representation of your view. From
>that representation, a string of markup is produced, and injected
>into the document. When your data changes, the render method is
>called again. In order to perform updates as efficiently as possible,
>we diff the return value from the previous call to render with the
>new one, and generate a minimal set of changes to be applied to the
>DOM.

In essence, _the view is a function of the data_ (in fact, the creators
of React went so far as to
[create](https://facebook.github.io/immutable-js/)
a suite of immutable data structures for JavaScript). Now, you may be
thinking:

>Hey! In that case, we can just use ES6 plus ImmutableJS and everything
>will be awesome because I don't have to deal with parenthesis!!!

Look, attempting to add immutablility to ES6 is shoving a square peg in a
round hole.

### But, Parenthesis!!!!

ClojureScript syntax is _simple_ (which is not the same thing as
_easy_). Here is an explanation of `token` and `block`
delimiters.

Take this JavaScript function:

```javascript
1   function render(person, favoriteColor) {
2     return (
3       <div
4         data-first-name={person.firstName}
5         data-last-name={person.lastName}
6         style={{ backgroundColor: favoriteColor }}>
7         Hello World
8       </div>
9     );
10  }
```

- Line `1` has the token delimiter `(`, and `,`. This line also has `{`, a block delimiter.

- Line `3` has a block delimiter of `<` (which is overloaded with `<`,
  a token delimiter when it's in between two numbers `1 < 2`).

- Line `4` has a few token delimiters: `.`, and `=`. There are
  also block delimiters: `{`. The `-` is ignored because of the
  `<` delimiter on line `3` (which shouldn't be confused with the `<`
  token delimiter when it's between two numbers).

- Line `6` has token delimiters `:`, and block delimiters `{`,
  `>`. The token `backgroundColor` cannot be called `background-color`
  because it's no longer within in `<` block delimiter.

- Line `8` has another block delimiter `</>`.

- Line `9` has block delimiter `;`.

In ClojureScript:

```clojure
(defn render [person favorite-color]
  [:div
   {:data-first-name (:first-name person)
    :data-last-name (:last-name person)}
    :style {:background-color favorite-color}
   "Hello World"])
```

The token and block delimiter counts are about the same, but _they
are not overloaded, nor do they contextually change_ (ie. not
_complex_). Given this consistency, plugins make it very straight
forward to manipulation these `symbolic-expressions` (you won't be
balancing parenthesis as much as you think).

Look. I get it. You're used to the Ada-based syntax that JavaScript
(and ES6) borrows from. Learning languages that have similar syntax
are _easy_ (familiar). But it doesn't change the fact that this syntax
is more _complex_ (has measurable, objective cognitive overhead)
than ClojureScript. If you haven't worked with a Lisp dialect,
ClojureScript's syntax looks _hard_ (unfamiliar), which is completely
fair. But, its syntax is also _simple_ (has less cognitive overhead).

In essence, _hard_ things can eventually become _easy_. But, _complex_
things have a much much more difficult time in becoming _simple_. The
three hours worth of videos go into great detail about the simplicity of
ClojureScript (you should watch them if you still haven't).

### But No Really, Parenthesis!!!!

Let's take a more focused look at block delimiters. Here is some html:

```html
1   <div class="section">
2    <p>
3      You walk into the store. A midget stands behind the counter on a
4      stool. He occasionally props himself up with locked arms and dangles
5      his feet in the air.
6    </p>
7    <div>
8      <a style="margin: 0; padding: 0"
9         href="javascript:;"
10        onClick="buyItem()">Buy Mokébox<a>
11     <p style="margin: 0; padding: 0; margin-bottom: 10px, font-size: smaller">
12       Use this to capture Moképon.
13     </p>
14   </div>
15   <hr/>
16   <a id="back-button" href="javascript:;" onClick="goBack()">Go back.</a>
17  </div>
```

Now, at a glance you can immediately grok the structure. This _isn't_
because of the block delimeters (`<div>`, `<p`>, etc.), it's because
of the formatting. Here is the same html, but formatted differently:

```html
1  <div class="section"><p>
2      You walk into the store. A midget stands behind the counter on a
3      stool. He occasionally props himself up with locked arms and dangles
4      his feet in the air.<div></p>
5    <div><a style="margin: 0; padding: 0"
6       href="javascript:;"
7       onClick="buyItem()">Buy Mokébox<a>
8    <p style="margin: 0; padding: 0; margin-bottom: 10px, font-size: smaller">
9      Use this to capture Moképon.</p></div>
10   <hr/>
11   <a id="back-button" href="javascript:;" onClick="goBack()">Go back.</a></div>
```

Surprisingly the structure can still be inferred pretty easily. Except
there is one small mistake in line `4`, do you see it? There is a rouge `<div>` block delimeter.

>But, we have tooling to make sure that doesn't happen!

That's great! And so does ClojureScript via plugins like paredit and
surround. Here is the same html above, but using Sablono. _Now, take a
second to internalize that the next part you'll see is hard (unfamiliar),
**not** complex (has measurable, objective cognitive overhead)._

```clojure
1  [:div.section
2     [:p (str "You walk into the store. A midget stands behind the counter on a stool. "
3              "He occasionally props himself up with locked arms and "
4              "dangles his feet in the air.")]
5     [:div [:a {:style {:margin "0"
6                        :padding: "0"
7                        :href "javascript:;"
8                        :on-click "buyItem()"}}
9            "Buy Mokébox"]
10     [:p {:style {:margin "0"
11                  :padding "0"
12                  :margin-bottom "10px"
13                  :font-size "smaller"}}
14      "Use this to capture Moképon."]]
15    [:hr]
16    [:a#back-button {:href "javascript:;"
17                     :on-click "goBack()"}
18     "Go back."]]
```

The tooling ensures that all the parenthesis, brackets, and braces
balance out. So as you get better with the tooling, _the block
delimeters mentally fade away, because you start thinking in code "forms" and
how to manipulate them, as opposed to syntax/closing out blocks._

## JavaScript to ClojureScript

Here are some examples of how to translate ES2016 + JSX
to ClojureScript + Sablono.

## Defining a Function

```javascript
function sayHello(name, otherName) {
  return `${name} says hello to ${otherName}`;
}
```

Aside: Notice all the token and block delimiters?

```clojure
(defn say-hello [name other-name]
  (str name " says hello to " other-name))
```

- Names in ClojureScript are `kebab-cased` as opposed to `camelCased`.
- Functions in ClojureScript implicitly return the last symbolic
  expression (an sexp is basically the last parenthetical set).
- There are only four types of delimiters in ClojureScript. The token
  delimiter is a space ` `, and the block delimiter can be any
  closing pair: `)`, `}`, `]`.
- ClojureScript's `str` function joins multiple strings together.
- You _really_ need to get used to editing with plugins similar to
  `paredit`. Balancing parenthesis are not fun, using a plugin will
  make _manipulating_ s-expressions trivial (lisp dialects are
  _not_ about manipulating closing parens like most devs think):
  - Emacs had `paredit` built in.
  - [Vim](https://github.com/vim-scripts/paredit.vim)
  - [Sublime Text](https://github.com/odyssomay/paredit)
  - [Atom](https://atom.io/packages/lisp-paredit)
- Another important plugin would be `vim-surround`. It'll help you
  manipulate ClojureScript block delimiters more efficiently:
  - [Emacs](https://github.com/timcharper/evil-surround)
  - [Vim](https://github.com/vim-scripts/paredit.vim)
  - [Sublime Text](https://github.com/jcartledge/sublime-surround)
  - [Atom](https://atom.io/packages/vim-surround)

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

- Dictionaries in ClojureScript are denoted by the `{}` literal. The key
  values are just _paired items_ between the `{}` (you'll get a
  compiler error if you have a `{}` with an odd number of items). You
  can add `,` if you want, but ClojureScript just considers `,` as
  whitespace.
- For accessing dictionary values: in JavaScript you
  would do `person.firstName`, in ClojureScript it's `(:first-name
  person)`.

## Defining Local Variables

```javascript
function newPerson(firstName, middleName, lastName) {
  let fullName = firstName + ' ' + lastName;
  let middleInitial = middleName[0];
  return {
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    fullName: firstName + ' ' + lastName
  };
}
```

```clojure
(defn new-person [first-name middle-name last-name]
  (let [full-name (str first-name " " middle-name " " last-name)
        middle-initial (first middle-name)]
    {:first-name first-name
     :middle-name middle-name
     :middle-initial middle-initial
     :last-name last-name
     :full-name full-name}))
```

The `let` binding takes in an array of pairs (similar to a map
`{}`). An odd numbered array will give you a compiler error.

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
`#()` shorthand are `%`, `%2`, `%3`, etc. Here is the same
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
convert from a ClojureScript data structure to a JavaScript data
structure. You wont be doing this often, but it's good to know.


## ES2015 Classes + JSX vs Clojure Functions + Sablono

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

### Application State - Defining Atoms

With respect to front end application state (and in this case
`React`), you need some means of storing said application state
globally. React solves this with various different techniques, such as
using a Flux architecture (eg. Redux), or using a "container"
`React.Component` where everything is stored in the top level
`state` property (and updated via `setState`).

ClojureScript has a concept of an `atom` which is a transactional
object that can be passed by _reference_. In ClojureScript everything is
immutable, so being able to pass something by reference is a unique
trait.

Instead of using a React component's `props` attribute (and
`setState`). We can use an `atom` defined top level:

```clojure
(def app-state
  (atom {:team-at-home []
         :team []
         :location :home
         :chosen nil
         :battling nil}))
```

Aside: Using `def` is similar to using `var`/`let` in JavaScript. In fact, defining a
function `(defn say-hello [param] )` is shorthand for `(def say-hello (fn [params] ))`.

In JavaScript + React, when you what a control hierarchy to render, you would
create a method similar to `addPerson` which calls `setState` (calling
this method eventually makes the React control hierarchy rerender):

```javascript
import { Component } from 'react';

export class PeopleView extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'John', lastName: 'Doe' },
      ]
    };
  }

  addPerson(firstName, lastName) {
    this.setState({
        people: this.state.people.concat({
          firstName: firstName,
          lastName: lastName
        });
      });
  }
}
```

In ClojureScript, instead of using `setState`, you can use an `atom`
and its `swap!` function:

```clojure
(def app-state
  (atom
    {:people [{:first-name "Jane"
               :last-name "Doe"}
              {:first-name "Jane"
               :last-name "Doe"}]}))

(defn on-add-person [first-name last-name]
  (swap! app-state
         merge
         {:people (conj (:people @app-state)
                        {:first-name first-name
                        :last-name last-name})}))
```

To get the value from an `atom`, you must first dereference it. This
is done by preceding the `atom` with an `@` sign. If we want to create
a new application state from an existing one, you would do something
like this:

Given an `atom` called `app-state` with the following value:

```clojure
(def app-state
  (atom
    {:people [{:first-name "Jane"
               :last-name "Doe"}
              {:first-name "Jane"
               :last-name "Doe"}]}))
```

You would concatenate the new person using the `conj` ClojureScript
function, with the value currently in the `app-state` (dereferencing
the current value using `@`).

```clojure
{:people
  (conj (:people @app-state)
        {:first-name "Baby"
         :last-name "Doe"})}
```

To update `app-state` atomically, we use `swap!`, giving it the `atom`
as the first parameter, what function we want to run on the `atom` (in
this case it's `merge`), and what value we want to merge in. Putting
all that together we get:

```clojure
(defn on-add-person [first-name last-name]
  (swap! app-state
         merge
         {:people (conj (:people @app-state)
                        {:first-name first-name
                        :last-name last-name})}))
```

As soon as `swap!` is called. Sablono propagates those changes
throughout all the React components.

Aside: Details of `merge` and `conj` along with other ClojureScript
functions are covered in the next section.

## You Don't Need Lodash When Using ClojureScript

Let's go through some ClojureScript functions and see how they
replace what's in Lodash:

### `map`

todo

### `merge`

todo

### `assoc`

todo

### `conj`

todo

### `get-in`

todo

### `update-in`

todo

### `dissoc`

todo

### `if`

todo

### `cond`

todo
