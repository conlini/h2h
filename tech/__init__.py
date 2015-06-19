from collections import defaultdict

from models import *
import sys
from request_handler import *

# load all the current ParamProperty and ParamValues in to memory

property_vals = defaultdict(list)
properties = {}

def get_properties():
    return properties

def load():
    print "pre-loading data"
    for param_property in ParamProperty.objects.all():
        properties[param_property.param_name] = param_property
        for vals in param_property.paramvalue_set.all():
            property_vals[param_property.param_name].append(vals.param_value)


def add_value_to_property(value, param_property):
    ParamValue(param_property=param_property, param_value=value).save()
    property_vals[param_property.param_name].append(value)


def property_has_value(property_name, value):
    return value in property_vals[property_name]


def _get_best_type_for_property(value):
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
    type = _get_best_type_for_property(value)
    property = ParamProperty(param_type=type, param_name=property_name)
    property.save()
    return property


