#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    # hack to load the tech db cache. Need refactoring
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "h2h.settings")
    from tech import load
    load()
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "h2h.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
