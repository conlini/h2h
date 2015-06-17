"""
WSGI config for h2h project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from tech import load

# hack to load the DB cache. i can't think of a better way to do this for now
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "h2h.settings")
load()
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "h2h.settings")

application = get_wsgi_application()
