from django.db import models

# Create your models here.
class ParamProperty(models.Model):
    param_type = models.CharField(max_length=20, null=False, blank=False)
    param_name = models.CharField(max_length=50, null=False, blank=False)


class ParamValue(models.Model):
    param_property = models.ForeignKey(ParamProperty)
    param_value = models.CharField(max_length=100, null=False, blank=False)


class Item(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=1000, null=True, blank=True)


class ItemParam(models.Model):
    param_name = models.CharField(max_length=50, null=False, blank=False)
    param_value = models.CharField(max_length=100, null=False, blank=False)
    item = models.ForeignKey(Item)
    param_property = models.ForeignKey(ParamProperty)