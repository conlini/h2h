# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):


    dependencies = [
         ('tech', '0004_auto_20150712_1530'),
    ]

    operations = [
        migrations.RunSQL(sql="UPDATE tech_item set category_id=1"),
    ]