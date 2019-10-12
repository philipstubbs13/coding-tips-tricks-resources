# React Testing

## Getting started with testing in React

* <https://www.youtube.com/watch?v=U_Q7ss7wvoo&list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-&index=1>
* <https://www.leighhalliday.com/testing-react-jest-enzyme-sinon>

## Testing Asychronous components with mocks in jest

* <https://www.youtube.com/watch?v=uo0psyTxgQM&list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-&index=2>
* <https://www.leighhalliday.com/testing-asynchronous-components-mocks-jest>

## Mocking axios in jest and testing async functions

* <https://www.youtube.com/watch?v=9Yrd4aZkse8&list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-&index=3>
* <https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions>

## Intro to React Testing Library

* <https://www.youtube.com/watch?v=YQLn7ycfzEo&list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-&index=4>
* <https://www.leighhalliday.com/introduction-react-testing-library>
* Test a componentDidCatch ErrorBoundary component in React: <https://www.youtube.com/watch?v=dxWrHEOD5DU>
* React testing library examples: <https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples/tree/master/?module=%2Fsrc%2F__local_tests__%2Fcomponent-did-catch.js&previewwindow=tests&view=editor>
* Cheatsheet: <https://testing-library.com/docs/react-testing-library/cheatsheet>
* <https://hackernoon.com/testing-react-with-jest-axe-and-react-testing-library-accessibility-34b952240f53>
* Component unit testing (and mocking) with react-testing-library: <https://www.youtube.com/watch?v=XDkSaCgR8g4&t=82s>
* <https://blog.echobind.com/writing-functional-tests-with-react-testing-library-part-1-470870ee1a6>
* <https://react-testing-examples.com/>
* Test Driven Development with React Testing Library: <https://www.youtube.com/watch?v=kCR3JAR7CHE&t=33s>
  * <https://codesandbox.io/s/94n7j4yy24>

## React Testing Library - Events and Async

* <https://www.youtube.com/watch?v=SSyy2sHpmIA&list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-&index=5>
* <https://www.leighhalliday.com/introduction-react-testing-library>

## Writing Better Tests With React Testing Library - Time to React - August 2019

* <https://www.youtube.com/watch?v=hFm0enk-qfM&t=16s>
* Gives us ways to query the dom the same way users would.
* Tests gives us confidence that our product (Still) works.
* <https://kentcdodds.com/blog/testing-implementation-details>
* Testing implementation details is bad. Implementation details are things which users of your code will not typically use, see, or even know about.
* Who is the user?
  * The end user in a browser
    * Views and interacts with the component.
  * The developer
    * Renders the component with props
* Tests should include:
  * Rendering the component with props (developer user)
  * querying and interacting with the rendered result (end user)
* Tests should not include:
  * implementation details
    * State
    * Component names
    * CSS classes/selectors
    * Anything that the users don't see!
* getByText will throw an error if it doesn't find exactly one match.
* If it relates to rendering components, then it should deal with DOM  nodes rather than component instances, and it should not encourage dealing with component instances.
* It should be generally useful for testing the application components in the way the user would use it. We are making some trade offs here because we're using a computer and often a simulated browser environment, but in general, utilities should encourage tests that use the component the way they're intended to be used.
* Utility implementation and APIs should be simple and flexible.
* react-testing-libary is:
  * A library for querying a DOM in your tests.
  * A replacement for enzyme.
* It helps us:
  * Have confidence in our code.
  * Reduce the cost of writing and maintaining tests.
