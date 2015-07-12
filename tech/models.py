from django.db import models



class Category(models.Model):
    category_name = models.CharField(max_length=75, null=False, blank=False)

    @staticmethod
    def get_default():
        return Category.objects.get_or_create(category_name="DEFAULT")[0].id

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
    category = models.ForeignKey(Category, blank=True, null=True, default=Category.get_default())

    def __repr__(self):
        return self.name," ", self.description


class ItemParam(models.Model):
    param_name = models.CharField(max_length=50, null=False, blank=False)
    param_value = models.CharField(max_length=100, null=False, blank=False)
    param_value_as_int = models.IntegerField(null=True, blank=True)
    item = models.ForeignKey(Item)
    param_property = models.ForeignKey(ParamProperty)

    def __repr__(self):
        return "ItemParam: name = " + self.param_name + " value =" + self.param_value