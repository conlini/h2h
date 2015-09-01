from collections import defaultdict

from models import *


# load all the current ParamProperty and ParamValues in to memory

# the property_vals dict holds all the possible values of a given property.
# This allows us to do a fast look up to see if a given proprety name already has the same value ingested

property_vals = defaultdict(list)
# Cached ParamProperties
param_properties = {}
loaded = False


def get_properties():
    return param_properties


def load():
    '''
    attempts to create a cache of the ParamProperty data when the system loads
    Currently is invoked from multiple points of API with the global loaded ensuring that it
    is done once in the app lifetime
    :return:
    '''
    # TODO use django's app load hooks to load this cache
    global loaded
    if not loaded:
        print "pre-loading data"
        for param_property in ParamProperty.objects.all():
            param_name = param_property.param_name.encode("utf-8")
            param_properties[param_name] = param_property
            for vals in param_property.paramvalue_set.all():
                property_vals[param_name].append(vals.param_value.encode("utf-8"))
        loaded = True


def add_value_to_property(value, param_property):
    '''
    Add the new value to the ParamProperty cache.
    :param value:
    :param param_property:
    :return:
    '''
    if not value in property_vals[param_property.param_name]:
        ParamValue(param_property=param_property, param_value=value).save()
        property_vals[param_property.param_name].append(value)


def property_has_value(property_name, value):
    return value in property_vals[property_name]


def _get_best_type_for_property(value):
    '''
    Given a value, attempt to identify the type of data. This is due to the fact that all
    data is stored as "string" in the DB
    :param value:
    :return:
    '''
    uval = value.encode('utf-8')
    if type(uval) is bool or uval.lower() in ["y", "n", "yes", "no", "true", "false"]:
        return "BOOL"
    elif uval.isdigit():
        return "INT"
    elif type(uval) is str:
        return "STRING"
    else:
        raise RuntimeError


def create_property_for_value(property_name, value):
    '''
    Create a new property as we have never seen this before
    :param property_name:
    :param value:
    :return:
    '''
    type = _get_best_type_for_property(value)
    property = ParamProperty(param_type=type, param_name=property_name)
    property.save()
    return property


def find_item_param(item, param_name):
    '''
    Find an item_param, given the param_name in this item.
    :param item:
    :param param_name:
    :return:
    '''
    for ip in item.itemparam_set.all():
        if ip.param_name == param_name:
            return ip