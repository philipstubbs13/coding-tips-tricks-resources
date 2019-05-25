# Testing

* TDD - Complete Beginner's Step by Step Tutorial: <https://github.com/dwyl/learn-tdd>

* UI testing with nightmare (quick start guide): <https://segment.com/blog/ui-testing-with-nightmare/>

* Learn daydream and nightmare: <https://github.com/dwyl/learn-daydream-and-nightmare>

* Two types of errors
  * Exceptions - Errors that are outside of your control
  * Bugs - bad code

* The value of try/catch blocks is that your program handles the error but doesn't stop (it keeps going/running).
  * Example: network errors.

* Mocha
  * npm test
  * Testing frameworks are meant to be read in English.
  * Mocha is the test runner.
  * You can use Mocha with lots of different testing syntax. For instance, here's Node's built-in Assert library:
    * <https://nodejs.org/dist/latest-v8.x/docs/api/assert.html>
    * Chai is an add-on that gives you things like "expect" and "should."
      * Providing the assertion tests.
      * expect syntax
      * Look at npm documentation - provides assert syntax.
      * Can use mocha without chai. But, cannot have chai without mocha.
      * <https://www.npmjs.com/package/chai>
        * <http://www.chaijs.com/guide/styles/>
          * helpful Chai reference for the different assertion libraries can be found here:
        * Here is the basic Chai API reference, which lists the assertion libraries it provides. Basically, it provides the expect/should syntax we are covering now, and it also provides the Node Assert syntax:
          * <http://www.chaijs.com/api/>
    * For every function in your code, write a test.
    * Don't need to install mocha or chai globally.

* Test your requirements and not your implementation.
* Unit testing - testing small bits of your code (like a function.).
  * Shortcoming of unit testing - don't see the big picture. Don't see things end to end in your application.
* Cucumber (testing framework) allows you to take in a table of data to test.

* User story: As a user, I want to do (action) so that I can (reason).
  * For example, as a user, I want to log in to the app so that I can access the content.
  * As a user, I want to tweet so that others can see them.
  * Need a way to measure what done is. How do you know when you're done with a feature?

* Nightmare.js
  * <https://github.com/segmentio/nightmare>
  * Install nightmare
  
  ```bash
  npm install --save-dev nightmare
  ```
  
  or
  
  ```bash
  npm i -D nightmare
  ```

* Unit testing
  * Equal is your new default assertion. It is the staple of every good test suite.
    * Remember to answer the following questions:
        1. What are you testing?
        2. What should it do?
        3. What is the actual output?
        4. What is the expected output?
        5. How can the test be reproduced?
    * <https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d>

* Karma
  * Similar to nodemon - able to watch your code while you are doing your development.
  * The reason the browser is open is because the test runner needs the javascript engine to run your tests. There are other tools out there that can run the JS engine in something called a headless browser (i.e. you can’t see it in the screen).
  * Functional tests you will actually see run in the open browser window.

* Other Resources
  * Writing testable Javascript: <http://alistapart.com/article/writing-testable-javascript>
  * An Overview of Javascript Testing in 2017*: <https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a>
  * Test-driven development: <https://en.wikipedia.org/wiki/Test-driven_development>
  * <https://javascriptplayground.com/the-perfect-javascript-unit-test/>

* Testing directory structure.
  * Src/
    * Header/
            * header.js
            * tests/
                * test.js
  * Search/
            * search.js
            * tests/
                * searchTest.js
