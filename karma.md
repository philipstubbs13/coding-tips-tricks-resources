## Karma

### Installing karma-cli globally
<pre>npm i -g karma-cli</pre>

### Setting up Karma
1. <pre>npm init</pre>

2. <pre>npm i -D karma karma-chrome-launcher karma-commonjs karma-browserify browserify watchify mocha chai karma-mocha-reporter</pre>

3. check package.json for devDependencies object

4. update test script to say:
<pre>
 "scripts": {
   "test": "karma start"
 },
</pre>

5. <pre>karma init</pre>

* mocha for testing framework
* no for RequireJS
* Chrome for browser capture
* add 'src/*.js' and 'test/*.js' as the locations for test and source
* Enter nothing when prompted about exclusions
* select yes for watching files on change

6. Edits to the karma.conf after it has been made:

* Find the section that says frameworks and add "browserify".
* Find the section that says preprocessors and add a key that reads 'test/*.js' whose value is ["browserify"].
* Find the section that says preprocessors and add a key that reads 'src/*.js' whose value is ["browserify"].
* Find the section that says reporters and add "mocha" behind "progress".