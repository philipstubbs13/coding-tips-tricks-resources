# Python class notes - 19 APRIL 2018

* Installing virtualenv: <https://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/11-06-2017-St-Paul-Class-Repository-FSF/tree/master/02-lesson-plans/part-time/21-Week/Django/01-Day/InstallationInstructions>
* Regular Expressions tutorial: <https://www.codeschool.com/courses/breaking-the-ice-with-regular-expressions>
* virtualenv notes
pip3 --version
sudo -H pip install virtualenv --user
pip install virtualenv
//now it works

1. Create a folder for our project
2. Create a folder for virtualenv inside that folder by following below:
   * If your default python version is 3.x:
       * `virtualenv env`
   * If your default python version is 2.7.x
       * `virtualenv -p $PATH_TO_PYTHON3 $ENV_NAME`
           * Eg. `virtualenv -p /usr/local/bin/python3 env`
       * Note: to find your path to Python3, run `which python3`
3. Activate virtualenv
   * `source $ENV_NAME/bin/activate`
4. Check Python and PIP versions:
   * `python --version`
   * `pip --version`

5. To “deactivate”:
   * `deactivate`

* Command to upgrade pip

<pre>pip install --upgrade pip</pre>

* Commands to help you follow along:
<pre>
> source dev/bin/activate

> pip install Django==1.10.1
> django-admin --help
> django-admin startproject learn
> python manage.py startapp users
> cd users
</pre>

* For those on VSCode - you can change from Powershell to Bash by following these set of commands
1. Do ctrl+shift+P - This will open up a drop down menu.
2. In the drop down menu type "open user settings" - which should give you a new screen.  On the right hand in the JSON brick of code put in "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
3. If this worked well then you should just have to restart VSC entirely to get Bash working.

* learn/learn/urls.py:

<pre>
from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin', admin.site.urls),
    url(r'', include('users.urls')),
]
</pre>

* learn/user/urls.py:

<pre>
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^home/', views.home, name='home'),
]
</pre>

* learn/users/views.py:

<pre>
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    response = "<h1>Hello, world!</h1>"

    return HttpResponse(response)
</pre>

* <http://www.django-rest-framework.org/>