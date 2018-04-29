# Python

* Repl
* Ctr + D to get out of Repl
* Python is like a Node.js
  * On the backend.
  * An alternative to Node.
  * Django is like express.
    * Django is a web framework built in python.
    * python is delineated by white space. Don't need semi-colons in python.
* In python, arrays are called lists.
* Django
  * <https://hackernoon.com/advantages-and-disadvantages-of-django-499b1e20a2c5>
  * In Django controllers are called views and views are called templates.
  * no spaces in directory names.
  * Each feature is an app in django. The project is the web app as a whole.
  * python --version
  * virtualenv dev
  * source dev/Scripts/activate
  * pip install Django==1.10.1
  * django-admin --help
  * django-admin startproject learn
  * cd ./learn
  * python manage.py startapp users
  * cd ./users
  * In views.py, add: from django.http import HttpResponse
  * python manage.py runserver
  * ./manage.py --help
  * python manage.py shell
  * from  users.models import User
  * User.objects.all()
  * John = User(first_name='John', last_name='Doe'), email='johndoe@yahoo.com', age=42)
  * John
  * joe = User(first_name="Joe", last_name="Lewis", email="joe@gmail.com", age=65)
  * joe.save()
  * Create migrations file: python manage.py migrations
  * Run migrations: python manage.py migrate
  * SQLite - database that stores everything in a single file.
  * learn is the web application. users is a django app.
* <https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions>
* String methods: <https://docs.python.org/3/library/stdtypes.html#string-methods>
* Inquirer package for python: <https://pypi.org/project/inquirer/>
* Pythoon installation instructions: <https://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/11-06-2017-St-Paul-Class-Repository-FSF/tree/master/02-lesson-plans/part-time/21-Week/Django/01-Day/InstallationInstructions>
* <https://www.shuup.com/blog/25-of-the-most-popular-python-and-django-websites/>
* <https://hackernoon.com/advantages-and-disadvantages-of-django-499b1e20a2c5>