---
path: "/All-you-need-to-know-about-authentication-and-permissions-in-Django-REST-API"
date: 2020-02-17
title: "All you need to know about authentication and permissions in Django REST API"
subtitle: "As a web developer"
tags: "Django"
readtime: 7
template: blogpost
---

Internet security is a process and you always need to get an eye on the latest security vulnerabilities of a tech stack that you've chosen to build your web app. But if you are using Django it won't be such a big problem as Django provides pretty nice out-of-the-box security solutions so you don't have to implement big amount of things by yourself.

Authentication and authorization is the first thing you need to know in order to make your REST API secure and well protected. After this tutorial you will realize that it's not that hard.

Let's get into it! 🙂

## Goals

1. Learn how permissions and authentication is used in Django REST Framework.
2. Learn how to quick and simply implement access control to API.

## Prerequisites

- Basic Django and Django REST Framework knowledge ('Hello World' is enough)
- Basic Git knowledge (optional)

## Let`s start

In Django REST Framework(DRF) permissions together with authentication and [throttling](<[https://www.django-rest-framework.org/api-guide/throttling/](https://www.django-rest-framework.org/api-guide/throttling/)>) determine whether a request to API should be granted or denied access.

## Permissions

Permissions are used for different classes of users and for different parts of the API. DRF always check permissions before running any code in views.

Permissions in DRF represents a list of classes which must be checked before any code executes. There are 7 built-in permission classes in DRF:

- `AllowAny`
- `IsAuthenticated`
- `IsAdminUser`
- `IsAuthenticatedOrReadOnly`
- `DjangoModelPermissions`
- `DjangoModelPermissionsOrAnonReadOnly`
- `DjangoObjectPermissions`

You can either [build custom classes](https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions) by yourself.

Permissions in Django REST Framework may be set in 3 different ways:

1. Globally to all API endpoints  
2. On an object level 
3. Right into the views.

Now let's take a look on each of this methods. In this article I'll use this [Django REST Framework starter](https://github.com/semaphore8/Django-REST-Framework-API-starter.git). You can clone it to your local machine and pass through this tutorial with me.

### Setting permissions globally

Setting permissions globally is the easiest way to implement user access to your API. You can do it by adding a string to your Django project's `settings.py` file:

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}
```

Now we can't access our API endpoints without authentication:

![../images/posts/1/1_1.png](../images/posts/1/1_1.png)

Now let's set global permissions class back to `rest_framework.permissions.AllowAny`  which is the default permission class in DRF. It gives users unrestricted access to API without authentication.

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}
```



### Setting permissions in views

The second way to set permissions in out Django project's is to specify it in the views(or in the viewsets).

We have 3 viewsets in `views.py`:

```python
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from starter.app.serializers import UserSerializer, GroupSerializer
from .models import Task
from .serializers import TaskSerializer

class UserViewSet(viewsets.ModelViewSet):
 
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
 
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
```

Let's add a permissions to the 'Groups' viewset. You can do it by simply adding `permission_classes` definition to viewset class. We'll use one of the DRF's built-in permissions. Don't forget to import it from `rest_framework.permissions` module:

```python{5,12}
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from starter.app.serializers import UserSerializer, GroupSerializer
from .models import Task
from .serializers import TaskSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
 
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
 
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class TaskViewSet(viewsets.ModelViewSet):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
```

As you can see now we can't get access to users list endpoint:

![../images/posts/1/1_3.png](../images/posts/1/1_3.png)

### Setting permission in objects

DRF is also support object-level permissioning. Object is usually refers to Django's model instance.

Let's add a model called 'Task' to our `models.py` file:



## Authentication

### Setting the authentication scheme

Auth may be 4 built in types:

1

2

3

4

Auth scheme as a permissions can be set globally:



On views or viewsets:



## Summary

We`ve learned how to:

Now you know how to implement authorization to your API.

This is the first checkpoint of the security process of your web-app. Here is some more security recommendations from Django team. [https://docs.djangoproject.com/en/3.0/topics/security/](https://docs.djangoproject.com/en/3.0/topics/security/)
