# ES6travaganza

* EcmaScript6
  * ES6 Cheatsheet: <https://github.com/DrkSephy/es6-cheatsheet>
  * <http://es6-features.org/>
  * Just another name for Javascript.
  * Create the Javascript standard.
<<<<<<< HEAD
  * Setting up ESLint: <https://github.com/beejunk/eslint-guide>
=======
>>>>>>> 9fbd07fb1f050f8ab8e02c65b7b1e9b623b01934
* Use 'const' to declare variables which won't changed.
  * const is an immutable variable.
* Use 'let' to declare variables which will change.
* var, let, and const: <https://www.youtube.com/watch?v=sjyJBL5fkp8>
* <https://medium.com/craft-academy/javascript-variables-should-you-use-let-var-or-const-394f7645c88f>
* <https://javascript30.com/>
* <https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be>
* <https://www.tutorialspoint.com/es6/index.htm>
* <https://zoom.us/recording/share/gGFrAemmmEqP3VHh6JzgZlrHxP6E4ELr7UAsqb4SI0OwIumekTziMw>
* <http://wesbos.com/let-vs-const/>
* Hoisting
  * Go through and look for all functions.
  * Function names are hoisted to the top of the code.
  * Functions can be run anywhere.
* You can't redefine let variables that are in the same scope. It will cause the error.
* let prevents you from redefining variables in the same scope.
* You can redefine let in its own subblock.
* Template literals
  * ${classmate}
  * button.innerHTML = `How many tacos did ${classmate} eat?`; //`How many tacos did Joe eat?`
  * button.innerHTML = `How many tacos did ${classmate + teacher} eat?`; //`How many tacos did Joe eat?`
  * button.innerHTML = `How many tacos did ${classmate}${teacher} eat?`; //`How many tacos did Joe eat?`
* Arrow functions
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
    <pre>const multiply2 = (a, b) => {
        return a * b;
    };</pre>
    <pre>const multiply3 => (a, b) => a * b;</pre>

* ES6 - Destructuring
<pre>
var luke = {occupation: "Jedi", father: "Anakin"};
let {occupation, father} = luke;
</pre>

is the same as

<pre>
var occupation = luke.occupation; //Jedi
var father = luke.father; //Anakin
</pre>

* Array Destructuring
* Import/Export
  * Browsers don't support this yet.
  * Transpilers: babel
    * Convert ES6 code back to ES5.

* Use let, const, and template literals.
* Classes: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>
* Spread: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
* Babel: <https://babeljs.io/>
* map: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>
* Arrow functions: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
* Class functions: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>
* Template literals: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals>
* let: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let>
* const: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const>
* Reintroduction to Javascript: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript>
* ES6 Cheatsheet: <https://github.com/DrkSephy/es6-cheatsheet>
* ES6 Classes: <https://www.youtube.com/watch?v=EUtZRwA7Fqc>
* Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
* forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* Export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
* Import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
<<<<<<< HEAD
* eslint guide: https://github.com/beejunk/eslint-guide
* https://www.taniarascia.com/es6-syntax-and-feature-overview/
=======
* eslint guide: https://github.com/beejunk/eslint-guide
>>>>>>> 9fbd07fb1f050f8ab8e02c65b7b1e9b623b01934
