# -*- coding: utf-8 -*-
# Generated by Django 1.11.17.dev20181001130818 on 2018-11-30 10:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [("djangocms_versioning", "0014_version_source")]

    operations = [
        migrations.AddField(
            model_name="version",
            name="modified",
            field=models.DateTimeField(default=django.utils.timezone.now),
        )
    ]