from django.db.models import Q
from collections import defaultdict
import tech.repo as repo
from tech.models import *
import sys


def __tobool(value):
    return True if value == "true" else False


def __filter_out(key, value, param_type, data):
    answer = data[:]
    for d in data:
        for ip in d.itemparam_set.all():
            if ip.param_name == key:
                if param_type == "INT":
                    if ip.param_value_as_int < value[0] or ip.param_value_as_int > value[1]:
                        answer.remove(d)
                        continue
                elif param_type == "BOOL" and value[0]:
                    if __tobool(ip.param_value) != value[0]:
                        answer.remove(d)
                        continue
    return answer


def handle_query_request_internal(query):
    """
    We are resorting to app level filtering as we need to have filters such as
    (itemparam_param_name= 'abc' and itemparam_param_value = 'a') and (itemparam_param_name= 'pqr' and itemparam_param_value = 'b')
     which seems to not work well with Q modes.

    :param query:
    :return:
    """
    # TODO need to look at server side filtering of data
    repo.load()
    category = query["category"]
    if category == 0:
        # we load all the items
        __all_items = [item for item in repo.products().values()]
    else:
        __all_items = [item for item in repo.products().values() if item.category_id == category]
    # hack, seems to listify the queryset object allowing for filtering
    len(__all_items)
    for f in query['filters']:
        for k, v in f.items():
            param_property = repo.get_param_properties().get(k)
            param_type = param_property.param_type
            __all_items = __filter_out(k, v, param_type, __all_items)

    answer = {}
    result = []
    answer['filteredData'] = result
    for item in __all_items:
        this_item = {"name": item.name, "description": item.description}
        this_item_params = []
        for item_param in item.itemparam_set.all():
            this_item_params.append({"param_name": item_param.param_name, "param_value": item_param.param_value})
        this_item["parameters"] = this_item_params
        result.append(this_item)
    return answer


def get_filters_and_ranges(cat_id=None):
    repo.load()
    filters = defaultdict(list)
    filter_meta = {}
    for name, param_property in repo.get_param_properties(cat_id).items():
        for val in repo.property_vals[name]:

            param_type = param_property.param_type
            if param_type == "INT":
                # this should just have 2 values, min and max
                try:
                    if name in filters:
                        if int(val) > filters[name][1]:
                            filters[name][1] = int(val)
                        if int(val) < filters[name][0]:
                            filters[name][0] = int(val)
                    else:
                        filters[name].extend([sys.maxsize, -1])
                    filter_meta[name] = "INT"
                except ValueError as v:
                    import logging
                    logger = logging.getLogger("h2h")
                    logger.error("Error converting value {} to INT".format(val))
            elif param_type == "BOOL":
                filters[name] = [True, False]
                filter_meta[name] = "BOOL"
            else:
                filters[name]
                filter_meta[name] = "TEXT"
    return {"filters": filters, "filter_meta": filter_meta}


def get_all_categories():
    repo.load()
    return repo.category_hierarchy


def save_categories_internal(input, parent=None):
    repo.load()
    for k, v in input.items():
        cat = repo.create_category(k, parent)
        if v:
            for child in v:
                save_categories_internal(child, cat["name"])

def save_category_properties_internal(cat_id, input):
    repo.load()
    __cat = Category.objects.get(id=cat_id)
    for property in input:
        if property.get("property_name") not in repo.get_param_properties():
            repo.create_property(property.get("property_name"), property.get("property_type"), __cat)
    return True

def get_properties_for_category_internal(cat_id):
    repo.load()
    return repo.get_properties_for_category(cat_id)

def save_items_interna(input):
    repo.ingest_bulk(input)