from collections import defaultdict

from tech.models import *


# load all the current ParamProperty and ParamValues in to memory

# the property_vals dict holds all the possible values of a given property.
# This allows us to do a fast look up to see if a given proprety name already has the same value ingested

# Cached ParamProperties, values and categories
property_vals = defaultdict(list)
__param_properties = {}
__ROOT = {"name": "root", "children": []}
category_hierarchy = __ROOT
cat_rev_lookup = {"root": __ROOT}
__cat_id_mapping = {}
__cat_prop_mapping = defaultdict(list)

loaded = False

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
        for cat in Category.objects.all():
            cat_name = cat.category_name
            current = cat_rev_lookup.get(cat_name, None)
            parent = None
            if cat.parent:
                cat_parent = cat.parent.category_name
                parent = cat_rev_lookup.get(cat_parent, None)
            if not current:
                # we havent visited this guy ever
                current = {"name": cat_name, "children": [], "_id": cat.id}
                cat_rev_lookup[cat_name] = current
                __cat_id_mapping[cat.id] = cat_name
            if parent:
                # stick current as is into the parent. This is the cache load phase
                parent['children'].append(current)
            else:
                # this is a root node
                cat_rev_lookup["root"]["children"].append(current)

        for param_property in ParamProperty.objects.all():
            param_name = param_property.param_name
            __param_properties[param_name] = param_property
            cat_id = param_property.category_id
            __cat_prop_mapping[cat_id].append(param_property)
            for vals in param_property.paramvalue_set.all():
                property_vals[param_name].append(vals.param_value)

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
    return create_property(property_name, __property_type, category)


def create_property(property_name, type, category):
    __property = ParamProperty(param_type=type, param_name=property_name, category=category)
    __property.save()
    __param_properties[property_name] = __property
    __cat_prop_mapping[category.id].append(__property)
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


def create_category(category_name, parent_name=None):
    cat = cat_rev_lookup.get(category_name, None)
    parent = None
    if parent_name:
        parent = cat_rev_lookup.get(parent_name, None)
    if cat:
        # we already have one, and this may be a addition/modification of the parent
        # this means we a) have to look up who owned this and move the child b) add this as a child to new parent
        # for now, we will just stick it to the new parent and this becomes a FIXME
        if parent:
            parent['children'].append(cat)
    else:
        # we have never seen this fellow. lets create a new one
        _cat_model = Category.objects.update_or_create(category_name=category_name)[0]
        cat = cat_rev_lookup[category_name] = {"name": category_name, "children": [], "_id": _cat_model.id}
        __cat_id_mapping[_cat_model.id] = category_name
        if parent:
            parent["children"].append(cat)
        else:
            # no parent, this is a root
            cat_rev_lookup.get("root").get("children").append(cat)
    return cat


def get_properties_for_category(cat_id):
    __cat = Category.objects.get(id=cat_id)
    hierarchy = __get_cat_hierarchy(__cat, cat_id)
    answer = []
    for __cat_id in hierarchy:
        for param_prop in __cat_prop_mapping[int(__cat_id)]:
            answer.append({ param_prop.param_name : param_prop.param_type })
    return answer


def __get_cat_hierarchy(__cat, cat_id):
    current = __cat.parent_id
    hierarchy = [cat_id]
    while (current):
        parent = Category.objects.get(id=current)
        hierarchy.append(parent.id)
        current = parent.parent_id
    return hierarchy


def get_param_properties(cat_id=None):
    if cat_id:
        hierarchy = __get_cat_hierarchy(Category.objects.get(id=cat_id), cat_id)
        answer = {}
        for __cat_id in hierarchy:
            if __cat_id in __cat_prop_mapping:
                for param_prop in __cat_prop_mapping.get(__cat_id):
                    answer[param_prop.param_name] = param_prop
        return answer
    return __param_properties

def ingest_bulk(data):
    for d in data:
        category_name = d['category']
        category = Category.objects.get_or_create(category_name=category_name)[0]
        name = d['name']
        item = Item.objects.get_or_create(name=name, category=category)[0]
        for prop in d['properties']:
            param_name = prop['prop_name']
            param_value = prop['prop_value']

            if not param_name in get_param_properties(category.id):
                param_property = create_property_for_value(param_name, param_value, category)
            else :
                param_property = get_param_properties()[param_name]
            add_value_to_property(param_value, param_property)
            ip = find_item_param(item, param_name)
            if not ip:
                ip = ItemParam(param_name=param_name, param_property=param_property, item=item)
            ip.param_value = param_value
            if param_property.param_type == "INT" :
                ip.param_value_as_int = int(param_value)
            ip.save()
