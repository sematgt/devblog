---
path: "/How-to-deploy-your-Django-application-to-Heroku"
date: 2020-04-29
title: "How to deploy your Django application to Heroku"
subtitle: "A small and straightforward guide"
tags: "Django"
readtime: 10
template: blogpost
edited: 2020-05-01
tableOfContents: true
---

![Featured photo](../images/posts/2/pero-kalimero-9BJRGlqoIUk-unsplash.jpg "Photo by [Pero Kalimero](https://unsplash.com/@pericakalimerica?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cloud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)")

Deploying a Django app to production for the first time is not the easiest thing in this world.

In order to make this process more clear and less painful, I made this guide as small as possible to successfully deploy your app without losing the understanding of how it works.

Here is the basic workflow of the Django web-application in production:

**[user's web-browser]** <--> **[web-server]** <--> **[wsgi-server]** <--> **[your app's code]**

*Let's roll 🚴‍♀️*

## App prep

1. In your app's python environment install Gunicorn. It's a light-weight pure-Python WSGI(web server gateway interface)-server, a gateway between web-server and your application's code.

```bash
$ pip install gunicorn
```

Another WSGI-server's options you can get [here](https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/#how-to-deploy-with-wsgi)

2. There are several flavors to free host your Django app. The most popular nowadays are Amazon AWS, Pythonanywhere, and Heroku. Our choice today will be Heroku as it is specialized at web-apps and brings you an opportunity to deploy a production/dev/staging environment almost in a couple of clicks.

So let's pip install a utility that automatically configures your Django app to work with Heroku:

```bash
$ pip install django-heroku
```

import to your Django app's settings (`settings.py` in the default case):

```python
import django_heroku
```

and activate Django-Heroku config at the end of the same settings-file:

```python
django_heroku.settings(locals())
```

3. In your app's root folder create `runtime.txt` file with just one string, representing your Python's version `python-3.7.6`

4. Next, create `Procfile` in the same directory with the string declaring how to deploy your app

```text
web: gunicorn project_name.wsgi --log-file -
```

where `project_name` is obviously your Django project's name

5. Now let's review our Django `settings.py` with ["security, performance, and operations in mind"](https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/).

- Make sure that your `SECRET_KEY` used in production isn't mentioned anywhere else and is not committed to a version control system.

- Set

   ```python
   DEBUG = False
   ```

   and

   ```python
   ALLOWED_HOSTS = ['localhost', '127.0.0.1', '[::1]']
   ```

- Explicitly set sensitive data cookies transmitting over HTTPS:

   ```python
   CSRF_COOKIE_SECURE = True
   ````

   ```python
   SESSION_COOKIE_SECURE = True
   ```

- Now you can run

   ```python
   python manage.py check --deploy
   ```

   command and check if you can apply another security/performance tweaks, recommended by Django, to your app. These tweaks are different for each specific app.

6. Add

```python
DEBUG_PROPAGATE_EXCEPTIONS = True
```

to `settings.py` to see Django's errors in Heroku logs

## Heroku setup

1. [Signup](https://signup.heroku.com/) to Heroku

2. [Download](https://git-scm.com/downloads)/install Git if you didn't have it already

3. [Download](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)/install Heroku CLI (if path error then add to path manually)

4. After Heroku CLI setup opens new Terminal/Command Prompt window, go to your Django project's path and login to Heroku:

```bash
$ heroku login
```

5. If you didn't have a Git repository initialized in your Django project's root dir, initialize it:

```bash
$ git init
```

add `*.pyc` string to `.gitignore` file (create if you don't have it yet), commit changes to local repo:

```bash
$ git add *
$ git commit -m 'initial'
```

6. Create your Heroku app

First of all you have to choose the region where you want to deploy the app:

```bash
$ heroku regions
ID         Location                 Runtime
─────────  ───────────────────────  ──────────────
eu         Europe                   Common Runtime
us         United States            Common Runtime
dublin     Dublin, Ireland          Private Spaces
frankfurt  Frankfurt, Germany       Private Spaces
oregon     Oregon, United States    Private Spaces
sydney     Sydney, Australia        Private Spaces
tokyo      Tokyo, Japan             Private Spaces
virginia   Virginia, United States  Private Spaces
```

```bash
$ heroku create app-name --region eu --buildpack heroku/python
```

Your app's url will be something like this `https://app-name.herokuapp.com`

Git repo `https://git.heroku.com/app-name.git`

When you create an app, a Git remote (called `heroku`) is also created and associated with your local Git repository.

7. Deploy the app to Heroku:

```bash
$ git push heroku master
```

8. Migrate the database:

```bash
$ heroku run python manage.py migrate
```

9. Create the superuser:

```bash
$ heroku run python manage.py createsuperuser
```

10. Optionally: if you have a *"Missing staticfiles manifest entry for 'favicon.ico'"* error on Django admin page bundle static files locally:

```bash
$ python manage.py collectstatic
```

add this to `settings.py`:

```python
STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'
```

and push changes to Heroku:

```bash
$ git push heroku master
```

Now you can watch your app in the browser:

```bash
$ heroku open
```

🎉 Congratulations! Your app's web-debut had happened successfully !🍹
