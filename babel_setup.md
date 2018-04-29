# Babel Setup

## ES6 Compatibility

ES6 Compatibility Table: <http://kangax.github.io/compat-table/es6/>

* See which environments support which ES6 features! Node, browser, etc.

## Babel

Babel REPL: <https://babeljs.io/repl/>

* Allows you to see the conversion of ES6 -> ES5 real-time

VS Code Babel REPL Extension: <https://marketplace.visualstudio.com/items?itemName=t-sauer.vscode-babel-repl>

* Plugin for Babel REPL in VS Code

### Installing Babel CLI Globally

* Run the following in your terminal:

`npm install -g babel-cli`

### Using the Babel CLI

* Babel makes use of different "presets" or configurations that tell it how exactly it should compile and run our code. These presets are installed via npm and saved to our project's `package.json` files. 

* Additionally we must define a `.babelrc`. The `.babelrc` file is essentially a json file at the root of our project describing the presets will will be using. We don't have to worry about what these presets do exactly for now, just that they tell babel how it should treat our code.

* Once both of these are in place, we can run a file with babel by using `babel-node filename.js` instead of `node filename.js` in our project folder.
