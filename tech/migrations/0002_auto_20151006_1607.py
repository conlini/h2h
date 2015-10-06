# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tech', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, to='tech.Category'),
        ),
        migrations.AddField(
            model_name='paramproperty',
            name='category',
            field=models.ForeignKey(default=1, to='tech.Category'),
            preserve_default=False,
        ),
    ]
