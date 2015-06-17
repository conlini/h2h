# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=1000, null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='ItemParam',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('param_name', models.CharField(max_length=50)),
                ('param_value', models.CharField(max_length=100)),
                ('item', models.ForeignKey(to='tech.Item')),
            ],
        ),
        migrations.CreateModel(
            name='ParamProperty',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('param_type', models.CharField(max_length=20)),
                ('param_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='ParamValue',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('param_value', models.CharField(max_length=100)),
                ('param_property', models.ForeignKey(to='tech.ParamProperty')),
            ],
        ),
        migrations.AddField(
            model_name='itemparam',
            name='param_property',
            field=models.ForeignKey(to='tech.ParamProperty'),
        ),
    ]
