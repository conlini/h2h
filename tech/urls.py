"""h2h URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from tech.views import *
from tech.rest_points import *

urlpatterns = [
    url(r'^$', home),
    url(r'rest/filters/$', get_filters),
    url(r'rest/query/$', search),
    url(r'rest/categories/$', get_categories),
    url(r'rest/categories/save/$', save_categories),
    url(r'rest/(?P<cat_id>[0-9]+)/properties/$', get_properties_for_category),
    url(r'rest/(?P<cat_id>[0-9]+)/properties/save/$', save_category_properties),
]
