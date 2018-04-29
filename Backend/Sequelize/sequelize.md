## Sequelize

* http://docs.sequelizejs.com/
* http://sequelize.readthedocs.io/en/v3/
* FindAll method: http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-findAll
* Create method: http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-create
* Update method: http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-update
* Destroy method: http://docs.sequelizejs.com/class/lib/model.js~Model.html#static-method-destroy
* Where attribute: http://docs.sequelizejs.com/en/latest/docs/querying/#where
* Once a Sequelize model has been created and synced for the first time, any changes we make to our Todo model won't be picked up by our database. The easiest way to get around this during the development process is to pass "{ force: true }" as an argument into our sync method inside server.js file. This will make it so that every time we run our app, our Todos table will be dropped and recreated with the new configuration. More info here under: http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-sync
* Sequelize documentation on validations with examples can be found here: http://docs.sequelizejs.com/en/latest/docs/models-definition/#validations
* Entity Relationship Diagram: https://www.smartdraw.com/entity-relationship-diagram/
* Sequelize & Handlebars review: https://www.youtube.com/watch?v=EDgpYNqItmc&index=1&list=PLgJ8UgkiorCnbVc-ZiCqgm3dw7Cvrewq2
* SQL Server with Cascade Delte: https://www.techonthenet.com/sql_server/foreign_keys/foreign_delete.php
* Sequelize Associations: http://sequelize.readthedocs.io/en/latest/docs/associations/
* Eager loading: http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading
* Sequelize Associations Examples
    * https://github.com/sequelize/express-example/blob/master/models/task.js
    * https://github.com/sequelize/express-example/blob/master/models/user.js
* SQL Foreign Key Constraint: https://www.w3schools.com/sql/sql_foreignkey.asp
* Difference between a field type of string and text: https://nation.marketo.com/docs/DOC-4636-what-is-the-difference-between-a-field-type-of-string-and-text
* Sequelize and handlebars review: https://www.youtube.com/watch?v=EDgpYNqItmc&index=1&list=PLgJ8UgkiorCnbVc-ZiCqgm3dw7Cvrewq2
    * nodemon is an npm package that you install globally on  your computer. It watches for changes in your server.js file and restarts the server automatically when server.js is changed.
    * npm install -g nodemon
    * A GET request happens over the browser. GET request - retrieve data from the database.
    * POST request - post data to the database and get something back.
    * To see a list of npm packages installed globally: npm list -g
    * https://www.cacher.io/
    * Javascript .catch(err): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
    * Migrations: version control for your database
        * Keep track of the changes you are mkaing to your database and share those changes you're making to the database with other developers on your team. For example, if you wanted to add a couple of new columns to your database table.
        * Otherwise, the other developers won't get the changes you made to the database
    * https://github.com/pavankat/sequelize-example
    * https://gitter.im/interview-weekly/Lobby
    * https://github.com/pavankat/sequelize-project-management-example
* <https://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/>


* Command for installing sequelize-cli globally 
    * <pre>npm install -g sequelize-cli sequelize</pre>

* Known issues
    * Issue with model/index.js: https://github.com/sequelize/cli/issues/614

* What is Sequelize?
    * Sequelize is an ORM (Object Relational Mapper) for Node.js.

* What advantages does it offer?
    * Simple queries to the database.
    * Easy access to MySQL database.
    * Easy to test.

* What the heck is a Sequelize model? What role it will it play?


