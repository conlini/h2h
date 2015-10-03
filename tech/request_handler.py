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
    __all_items = Item.objects.all()
    # hack, seems to listify the queryset object allowing for filtering
    len(__all_items)
    for f in query['filters']:
        for k,v in f.items():
            param_property = repo.param_properties[k]
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


def get_filters_and_ranges():
    repo.load()
    filters = defaultdict(list)
    filter_meta = {}
    for name, param_property in repo.param_properties.items():
        for val in repo.property_vals[name]:

            param_type = param_property.param_type
            if param_type == "INT":
                # this should just have 2 values, min and max
                if name in filters:
                    if int(val) > filters[name][1]:
                        filters[name][1] = int(val)
                    if int(val) < filters[name][0]:
                        filters[name][0] = int(val)
                else:
                    filters[name].extend([sys.maxsize, -1])
                filter_meta[name] = "INT"
            elif param_type == "BOOL":
                filters[name] = [True, False]
                filter_meta[name] = "BOOL"
            else:
                filters[name]
                filter_meta[name] = "TEXT"
    return {"filters": filters, "filter_meta": filter_meta}


def get_all_categories():
    answer = {}
    cats = []
    answer['categories'] = cats
    for cat in Category.objects.all():
        cats.append({"id": cat.id, "name": cat.category_name})
    return answer
