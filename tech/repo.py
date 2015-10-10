from collections import defaultdict

from tech.models import *


# load all the current ParamProperty and ParamValues in to memory

# the property_vals dict holds all the possible values of a given property.
# This allows us to do a fast look up to see if a given proprety name already has the same value ingested

property_vals = defaultdict(list)
# Cached ParamProperties
param_properties = {}
__ROOT = {"name" : "root" , "children" :[]}
category_hierarchy = __ROOT
cat_rev_lookup = {"root" : __ROOT}


loaded = False


def get_properties():
    return param_properties


def load():
    """
    attempts to create a cache of the ParamProperty data when the system loads
    Currently is invoked from multiple points of API with the global loaded ensuring that it
    is done once in the app lifetime
    :return:
    """
    # TODO use django's app load hooks to load this cache
    global loaded
    if not loaded:
        print("pre-loading data")
        for param_property in ParamProperty.objects.all():
            param_name = param_property.param_name
            param_properties[param_name] = param_property
            for vals in param_property.paramvalue_set.all():
                property_vals[param_name].append(vals.param_value)

        for cat in Category.objects.all():
            cat_name = cat.category_name
            current = cat_rev_lookup.get(cat_name, None)
            parent = None
            if cat.parent:
                cat_parent = cat.parent.category_name
                parent = cat_rev_lookup.get(cat_parent, None)
            if not current:
                # we havent visited this guy ever
                current = {"name" : cat_name, "children" : [], "_id" : cat.id}
                cat_rev_lookup[cat_name] = current
            if parent:
                # stick current as is into the parent. This is the cache load phase
                parent['children'].append(current)
            else:
                # this is a root node
                cat_rev_lookup["root"]["children"].append(current)

        loaded = True


def add_value_to_property(value, param_property):
    """
    Add the new value to the ParamProperty cache.
    :param value:
    :param param_property:
    :return:
    """
    if not value in property_vals[param_property.param_name]:
        ParamValue(param_property=param_property, param_value=value).save()
        property_vals[param_property.param_name].append(value)


def property_has_value(property_name, value):
    return value in property_vals[property_name]


def __get_best_type_for_property(value):
    """
    Given a value, attempt to identify the type of data. This is due to the fact that all
    data is stored as "string" in the DB
    :param value:
    :return:
    """
    uval = value
    if type(uval) is bool or uval.lower() in ["y", "n", "yes", "no", "true", "false"]:
        return "BOOL"
    elif uval.isdigit():
        return "INT"
    elif type(uval) is str:
        return "STRING"
    else:
        raise RuntimeError


def create_property_for_value(property_name, value, category):
    """
    Create a new __property as we have never seen this before
    :param property_name:
    :param value:
    :return:
    """
    __property_type = __get_best_type_for_property(value)
    __property = ParamProperty(param_type=__property_type, param_name=property_name, category=category)
    __property.save()
    param_properties[property_name] = __property
    return __property


def find_item_param(item, param_name):
    """
    Find an item_param, given the param_name in this item.
    :param item:
    :param param_name:
    :return:
    """
    for ip in item.itemparam_set.all():
        if ip.param_name == param_name:
            return ip