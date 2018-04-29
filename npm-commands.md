# Quick review of commands to update npm packages
* To see a list of npm packages installed globally: 
	<pre>npm list -g</pre>
* nodemon is an npm package that you install globally on  your computer. It watches for changes in your server.js file and restarts the server automatically when server.js is changed.
    <pre>npm install -g nodemon</pre>
* To update all the packages in the local project: 
	<pre>npm update</pre>
* To update one package in the local project: 
	<p>Run "npm update" from the command line to update all npm packages.</p>
	<pre>npm update package-name</pre>
* To update all global packages installed on the system, including npm: 
	<pre>npm update -g</pre>
* To update just npm: 
	<pre>npm update npm -g</pre>

	<p>For more information, see https://docs.npmjs.com/cli/update.</p>
	<p>Run "npm -g" to update npm globally.</p>

# Debugging in node
	npm install -g inspect-process

# Example of starting from a blank slate (like your starting a new project)
	
		rm package-lock.json
		rm package.json
		rm -r node_modules
		
		Initialize package.json
		npm init
		
		Install packages
		npm install geocoder
		npm install weather-js
		
		Remove the directory node_modules
		rm package-lock.json
		rm -r node_modules
		
		Reinstall node_modules
		npm install
	
	
	Observe that node_modules and package-lock.json have been re-created and are back in you directory

# Other npm comands
* Want to install but does not exist in package.json file - this command saves it to our project.
	<pre>Npm install --save</pre>

* Looks at package.json and install everything in your dependency list.
	<pre>npm install</pre>

* Another npm command
	<pre>npm install request</pre>

* npm command line help information
	<pre>npm help</pre>

# npm package bookmarks
* https://www.npmjs.com/package/random-word

# Resources
* https://stackoverflow.com/questions/45052520/do-i-need-both-package-lock-json-and-package-json

# Inquirer
* http://simiansblog.com/2015/05/06/Using-Inquirer-js/
* https://www.npmjs.com/package/prompt-choices
* https://github.com/SBoudrias/Inquirer.js/blob/master/examples/pizza.js


