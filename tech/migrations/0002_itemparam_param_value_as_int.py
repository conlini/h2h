# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tech', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='itemparam',
            name='param_value_as_int',
            field=models.IntegerField(null=True, blank=True),
        ),
    ]
