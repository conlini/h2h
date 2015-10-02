"""
Django settings for h2h project.

Generated by 'django-admin startproject' using Django 1.8.2.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("secret.key", "abcd1234")

# SECURITY WARNING: don't run with debug turned on in production!
debug_val = os.environ.get("debug.enabled", "true")


DEBUG = True if debug_val == "true" else False

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tech',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'h2h.urls'

TEMPLATES = [

]

WSGI_APPLICATION = 'h2h.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

_SQLLITE = {'default': {'ENGINE': 'django.db.backends.sqlite3',
                        'NAME': os.environ.get("db_path", os.path.join(BASE_DIR, 'db.sqlite3')), }}

_POSTGRE = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get("DB.NAME"),
        'USER': os.environ.get("DB.USER"),
        'PASSWORD': os.environ.get("DB.PASSWORD"),
        'HOST': os.environ.get("DB.HOST"),
        'PORT': os.environ.get("DB.PORT"),
    }
}

_MYSQL = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get("DB.NAME"),
        'USER': os.environ.get("DB.USER"),
        'PASSWORD': os.environ.get("DB.PASSWORD"),
        'HOST': os.environ.get("DB.HOST"),
        'PORT': os.environ.get("DB.PORT"),
    }
}
_MYSQL2 = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': "h2h",
        'USER': "h2hdevmaster",
        'PASSWORD': "h2h#1234",
        'HOST': "h2hdev.cbsd9m5mvpho.us-west-2.rds.amazonaws.com",
        'PORT': "3306",
    }
}
DATABSE_OPTIONS = {"SQLLITE" : _SQLLITE, "POSTGRE" : _POSTGRE, "MYSQL" : _MYSQL}
DATABASES = DATABSE_OPTIONS.get(os.environ.get("DB.CHOICE"), "SQLLITE")
print "Selected database is {}".format(str(DATABASES))
# DATABASES = _MYSQL2
# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATIC_URL = '/static/'

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'templates'),
)

# STATIC ROOT for deployment
STATIC_ROOT = os.path.join(BASE_DIR, "static_root")

import os

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
        },
    },
}
