from django.db import models



class Category(models.Model):
    category_name = models.CharField(max_length=75, null=False, blank=False)

class ParamProperty(models.Model):
    '''
    A ParamProperty is a single property that describes any Item.
    This object is metadata only for the property
    '''
    # TODO Make this object category specific to allow for a better filter set
    param_type = models.CharField(max_length=20, null=False, blank=False)
    param_name = models.CharField(max_length=50, null=False, blank=False)


class ParamValue(models.Model):
    '''
    A single value that is linked to the ParamProperty.
    '''
    param_property = models.ForeignKey(ParamProperty)
    param_value = models.CharField(max_length=100, null=False, blank=False)


class Item(models.Model):
    '''
    An Item represents 1 piece of comparable data in the sytem.
    Its light weight and has only key attributes such as Name, Description
    and category it belongs to

    All properties about the Item are stored in ItemParam as a k,v tuple
    '''
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=1000, null=True, blank=True)
    category = models.ForeignKey(Category, blank=False, null=False)

    def __repr__(self):
        return self.name," ", self.description


class ItemParam(models.Model):
    '''
    A single property for an Item.
    It is FKed to ParamProperty which is a list of properties that may be used
    for filtering and search features
    '''
    param_name = models.CharField(max_length=50, null=False, blank=False)
    param_value = models.CharField(max_length=100, null=False, blank=False)
    param_value_as_int = models.IntegerField(null=True, blank=True)
    item = models.ForeignKey(Item)
    param_property = models.ForeignKey(ParamProperty)

    def __repr__(self):
        return "ItemParam: name = " + self.param_name + " value =" + self.param_value