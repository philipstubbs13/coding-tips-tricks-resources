# Python class notes - 21 APRIL 2018

* <https://regexr.com/>

* Activity: 07-Models-Solved
* Instructions

<pre>
Instructions:

Now that you know how to capture a term from a URL, update your urls.py to allow your own app to do this. It'll look just like your instructor's example.

Next, update your detail view to retrieve a user with the captured ID.

Start your development server and try your new route.

What happens if you pass an ID that doesn't correspond to a user in your database? What should your application do in these circumstances?

Read about error handling in Python at this link: https://wiki.python.org/moin/HandlingExceptions

Explain to your partner how a try/except block works. We'll go over using them in the review.

Read about Django's Http404 Exception at this link: https://docs.djangoproject.com/en/1.10/topics/http/views/#the-http404-exception

If you have time, use the code snippet in the above to refactor your code to raise an Http404 exception if someone requests details for a user that doesn't exist. You'll have to import Http404 from django.http.
</pre>

* get_object_or_404

<pre>
from django.shortcuts import get_object_or_404, render

from django.http import Http404, HttpResponse
...

def detail(request, user_id):
    user = get_object_or_404(User, id=user_id)
    context =  { 'user' : user }
</pre>

* Activity: 09-Generic-Views-Unsolved
* Add the following imports to users/views.py:

<pre>
from django.views.generic import DetailView, ListView

from .models import User
</pre>

* Add the following methods to views.py:

<pre>
class UserListView(ListView):
    model = User
    template_name = 'users/index.html'

    def get_context_data(self, **kwargs):
        context = super(UserListView, self).get_context_data(**kwargs)

        # In real life we'd retrieve this from the session.
        context['name'] = 'Adonis'

        return context

class UserDetailView(DetailView):
    model = User
    template_name = 'users/detail.html'
</pre>

* Update users/urls.py with the following:

<pre>
url(r'^index/$', views.UserListView.as_view(), name='index'),

    url(r'^detail/(?P<pk>[0-9]+)/$', 
        views.UserDetailView.as_view(), name='detail'),
</pre>

* Migrations

<pre>
python manage.py makemigrations
python manage.py migrate
</pre>

* You can use this if you need help seeding your database at any point in time:

<pre>
python manage.py makemigrations
python manage.py migrate

python manage.py shell
> from users.models import User

> jane = User(first_name='Jane', last_name='Doe', email='jane@doe.com', age=72)
> jane.save()
> john = User(first_name='John', last_name='Doe', email='john@doe.com', age=38)
> john.save()
</pre>

* Activity instructions

<pre>
Instructions:

For starters, implement the form in your add.html template. You've just seen how to do this—it will look the same as your instructor's example. Be sure to add an app_name in your urls.py, and set up your action attribute correctly.

Next, open up views.py. In your add view, check if the request came in as a GET or POST request. Save the value in a variable called request_type, and pass this to the template as the value of the header key. This way, you can see which type of request is rendering the view.

Start your development server, and check the value of request_type. What is it when you hit the route directly? What about when you click the submit button?

Once you're convinced your request_type check is working properly, open up users/views/py again.

What should you do if a user sends a GET request? Do you have anything to process, or do you just want to render the template and context like you've been doing? Come to a conclusion on this with your partner.

If a user sends a POST request, you know you'll have a POST dictionary with the values they submitted available. Explain to your partner what the names of the keys will be. If you'd like, test your hypothesis by sending the request.POST dictionary back to the template, and printing the values of its keys somewhere. You can access them with bracket syntax just like you would in Python: {{ post_dict['key'] }}.

How do you create a new user with these values? Create one, and save it.

Use your form to send some values to your view function. Then, manually hit your index view to see if Django saved your data.

If it works as expected—congratulations! You've finished the required portion of the activity. If you still have time, work through the points below.

While it's possible to manually navigate to your index view to check if everything worked, it would really be better if Django did that automatically. Read about Django's redirect method, and use it to accomplish this: https://docs.djangoproject.com/en/1.10/topics/http/shortcuts/#redirect . HINT: Use the same syntax you used in the {% url %} tag to refer to the route you want to redirect to.

Try to create a user without entering an email address, or either name. What happens? Can you think of any ways to address this? Discuss with your partner, and be prepared to share your ideas with the class.

If you'd like to take a stab at dealing with this yourself, look up and use the HTML5 required attribute. Then, think about what you could do in your view to address the problem.
</pre>

* forms.py:

<pre>
from django import forms

class UserForm(forms.Form):

    first_name = forms.CharField(label='First Name', max_length=256)

    last_name = forms.CharField(label='Last Name', max_length=256)

    email = forms.EmailField(label='Email', max_length=256)

    age = forms.IntegerField(label='Age', min_value=18)
</pre>

* users/view.py add an import for our user form class at the top:

<pre>from .forms import UserForm</pre>

* users/view.py create an instance of our UserForm and pass it to our template via the context:

<pre>
else:
        # If the user sends a GET request
        context = {'header': 'GET', 'form': UserForm() }
        return render(request, 'users/add.html', context)
</pre>

* render instance of UserForm in add.html template:

<pre>
    <form method="post" action="{% url 'users:add' %}">

      {% csrf_token %}

      {% for field in form %}
        <div class="form-group">
          {{ field.errors }}

          {{ field.label_tag}} {{ field }}
        </div>
      {% endfor %}

      <button type="submit" class="btn btn-primary">Submit</button>

    </form>
</pre>

* Activity Instructions

<pre>
Instructions:

Create a file to put your forms in, and import the class you need.

Create a form class for your User, and equip it with the right fields.

While you're at it, update your User model's email field to use an EmailField rather than a CharField. What two commands do you need to run to integrate this change?

Next, open up your views file. Import your form, and drop down to your add view.

When a user hits your site with a GET request, pass the rendered form to the template.

Update your template to use the form attributes passed in the context dictionary.

Back in your views file, update your POST branch. Create a new form with the right argument, and check if the data is valid.

What should you do if the data is valid? What about if it isn't? Implement the proper behavior for each case.

Start a development server and make sure everything works properly.

You'll notice that the form looks different than it did when you wrote it by hand. This is because Django's defaults are different from those you chose for your form.

You can change this behavior if you want. Read about Widgets in the Django Forms documentation: https://docs.djangoproject.com/en/1.10/ref/forms/widgets/#customizing-widget-instances

If you have time, see if you can fix the problem for at least one of the inputs. You'll need to specify a widget for the form field, and set its class attributes the way you had them before.

Can you imagine a better solution, or is this good enough?
</pre>

* Custom form widgets to return our form back to the original look.

users/forms.py:

<pre>
from django import forms

class UserForm(forms.Form):

    first_name = forms.CharField(label='First Name', max_length=256,
                    widget=forms.TextInput(attrs={ 'class' : 'form-control'}))

    last_name = forms.CharField(label='Last Name', max_length=256,
                    widget=forms.TextInput(attrs={ 'class' : 'form-control'}))

    email = forms.EmailField(label='Email', max_length=256,
                    widget=forms.TextInput(attrs={ 'class' : 'form-control'}))

    age = forms.IntegerField(label='Age', min_value=18,
                    widget=forms.NumberInput(attrs={ 'class' : 'form-control'}))
</pre>