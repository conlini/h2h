from collections import defaultdict

from models import *
import sys
from request_handler import *

# load all the current ParamProperty and ParamValues in to memory

property_vals = defaultdict(list)
properties = {}

def load():
    print "pre-loading data"
    for param_property in ParamProperty.objects.all():
        properties[param_property.param_name] = param_property
        for vals in param_property.paramvalue_set.all():
            property_vals[param_property.param_name].append(vals.param_value)


def add_value_to_property(value, property_name):
    ParamValue(param_property=properties[property_name], param_value=value).save()
    property_vals[property_name].append(value)


def property_has_value(property_name, value):
    return value in property_vals[property_name]


def _get_best_type_for_property(value):
    if type(value) is bool or value.lower() in ["y", "n", "yes", "no", "true", "false"]:
        return "BOOL"
    elif type(value) is int:
        return "INT"
    elif type(value) is str:
        return "STRING"
    else:
        raise RuntimeError


def create_property_for_value(property_name, value):
    type = _get_best_type_for_property(value)
    property = ParamProperty(property_type=type, property_name=property_name)
    property.save()
    return property


