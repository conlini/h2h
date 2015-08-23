# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    replaces = [(b'tech', '0001_initial'), (b'tech', '0002_itemparam_param_value_as_int'), (b'tech', '0003_auto_20150712_0952'), (b'tech', '0004_auto_20150712_1530'), (b'tech', '0005_set_default_cat_for_existing_items')]

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
        migrations.AddField(
            model_name='itemparam',
            name='param_value_as_int',
            field=models.IntegerField(null=True, blank=True),
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('category_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.ForeignKey(default=1, blank=True, to='tech.Category', null=True),
        ),
        migrations.RunSQL(
            sql='UPDATE tech_item set category_id=1',
        ),
    ]
