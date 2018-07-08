# React

## What is React

* An open-source Javascript library developed at Facebook specifically for the task of developing user interfaces.
* Developed for the purpose of building large apps with rapidly changing data.
* Relies on a component-based architecture. Elements of the UI are broken into self-contained components.
* Using React, UI elements are broken down into re-usable components. Each sub-component behaves in a way that it is fully contained.
* Components allow us to logically decompose a UI into different parts.
* They allow us to easily re-use these parts without re-coding.
* Component-based applications are easier to test.
* All of this can help us find bugs and save time.
* When working with React, we never update the DOM ourselves. Instead, whenever some part of our application's state changes, React efficiently updates the DOM for us to reflect this.
* React's Virtual DOM servers as an intermediary and avoids unneccessary trips to the DOM.
* Virtual DOM - a Javascript object that models the real DOM. Whenever some part of our application's state changes, the virtual DOM receives the UI updates first. Then the virtual DOM is compared to the real DOM.
* less complicated than other competing front-end JavaScript libraries and frameworks (for example, Angular, Ember, etc.)
* Need a build system --> webpack with Babel
* Can use ES6, ES7, and ES8 with React.
* webpack allows us to modularize our front end code in the same way we do in Node with CommonJS modules (require, module.exports). webpack also allows us to apply various transformations on our assets through the use of plugins.
* Babel is a Javascript compiler.
* Don't use a CDN --> It's super slow.
* vue.js: <https://vuejs.org/>
* Use map, reduce, or filter instead of for loops.
* React: Rethinking best practices: <https://www.youtube.com/watch?v=x7cQ3mrcKaY>
* <https://reactjs.org/docs/hello-world.html>
* read Hello World through Components and Props
* Javascipt reserved words: <http://www.javascripter.net/faq/reserved.htm>
* Yarn: <https://yarnpkg.com/lang/en/docs/install/>
  * This article succinctly explains the difference between `npm` and `yarn` to install dependencies: <https://www.sitepoint.com/yarn-vs-npm/>
* React without JSX: <https://reactjs.org/docs/react-without-jsx.html>
* <https://www.javascriptstuff.com/getting-started-tutorials/>
* Cross site scripting: <https://en.wikipedia.org/wiki/Cross-site_scripting>
* Separation of concerns: <https://en.wikipedia.org/wiki/Separation_of_concerns>
* JSX curly braces can be used inside of JSX code in order to embed Javascript expressions.
  * JSX curly braces can be compared to the double curly braces in Handlebars.
* Props are like function arguments that we can pass into components for them to use.
  * Can be passed to a component by attaching attributes to the JSX that renders the component, similar to how we attach attributes to regular HTML elements.
  * Should be considered immutable (something you can't change).
  * Can be used to change the default behavior of a component.
  * Props always return as an object.
* Stateful components
  * Created with ES6 Classes (which get rendered out as Javascript constructors)
  * State is a property attached to a class component.
  * State can contain data we want to associate with that component.
  * Values stored in a components state are different than regular variables.
    * Values stored in a state will update based on the change in state of the component.
  * A component can set and update it's own state, unlike props.
* <https://react-reacap.netlify.com/#/>
* React Developer Tools Chrome Extension:

<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienih>

* Single responsibility principle: <https://en.wikipedia.org/wiki/Single_responsibility_principle>
* <https://stackoverflow.com/questions/26069238/call-multiple-functions-onclick-reactjs>
* ES6 Classes: <https://www.youtube.com/watch?v=EUtZRwA7Fqc>
* <https://academy.learnstartup.net/>
* <https://nostarch.com/>
* <https://letslearnes6.com/>
* <https://reactjs.org/docs/state-and-lifecycle.html>
* <https://reactjs.org/docs/forms.html>
* <https://reactjs.org/docs/lifting-state-up.html>
* Components and props: <https://facebook.github.io/react/docs/components-and-props.html>
* Lists and keys: <https://facebook.github.io/react/docs/lists-and-keys.html>
* React boilerplate: <https://github.com/search?q=react+boilerplate>
* <https://github.com/petehunt/react-howto>
* React router: <https://reacttraining.com/react-router/>
* React Lifecycle Methods: <https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1>
* <https://www.reactenlightenment.com/>
* Conditional (ternary) operator: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator>
* An Element is an object which represents a DOM node.
* A (React) Component is a function which returns a React Element.
* <https://tylermcginnis.com/react-elements-vs-react-components/>
* React router: <https://reacttraining.com/react-router/web/guides/philosophy>
* Computed property names (dynamic key definitions)
  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names>
* React food-lookup-demo: <https://github.com/fullstackreact/food-lookup-demo>
* <https://stackoverflow.com/questions/44831916/how-to-delete-a-todo-item-onclick-in-react>
* React tutorial: <https://udilia.com/courses/learn-react-by-building-a-web-app>

<pre>
this.setState({
      [name]: value
    });
</pre>

## Deploying a React app to Heroku

* <https://blog.heroku.com/deploying-react-with-zero-configuration>
* <https://github.com/mars/create-react-app-buildpack>
* <https://github.com/mars/create-react-app-buildpack/issues/55>
* <https://github.com/mars/heroku-cra-node>
* <https://github.com/mars/create-react-app-buildpack/issues/75>
* <https://javascriptkicks.com/r/9348?url=https://daveceddia.com/deploy-react-express-app-heroku/>

## React UI component frameworks

* <https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42>
* <http://grommet.io/docs/query/>
* <https://react.semantic-ui.com/introduction>
* <https://www.primefaces.org/primereact/#/setup>
* <http://elemental-ui.com/>
* <http://jxnblk.com/rebass/>
* <https://www.material-ui.com/#/>
* <https://bloomer.js.org>
  * Bloomer — A set of React Stateless Components
* <https://reactstrap.github.io/>
* <https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c>
* Material UI icons: <https://www.npmjs.com/package/@material-ui/icons>

## Interesting articles

* Learn React in 8 minutes: <https://medium.com/learning-new-stuff/learn-react-js-in-7-min-92a1ef023003>

## React tutorials

* Building a weather app: <https://medium.com/pixels-in-progress/a-simple-weather-app-with-react-16a49e89b539>
