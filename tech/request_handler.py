from django.db.models import Q
from collections import defaultdict
import repo as repo
from models import *
import sys


def handle_query_request(query):
    '''
        # name : []
        name : [0, 100] Ranges
        name : [key1, key2 , key3] for textual
        name : [True/False] for Boolean

        query : {category: "cat" , filters : [{name : [], name : []}]}
    '''
    repo.load()
    compiledQueries = []
    for filter in query['filters']:
        for k, v in filter.iteritems():
            param_property = repo.param_properties[k]
            param_type = param_property.param_type.encode("utf-8")
            if param_type == "INT":
                range_key = "itemparam_param_value_as_int__range"
                compiledQueries.append(Q(itemparam__param_name=k) & Q(itemparam__param_value_as_int__range=v))
            elif param_type == "BOOL":
                compiledQueries.append(Q(itemparam__param_name=k) & Q(itemparam__param_value=v[0]))
            else:
                if v:
                    contains_key = "itemparam_param_value__icontains"
                    for val in v:
                        compiledQueries.append(Q(itemparam__param_name=k) & Q(itemparam__param_value__icontains=val))
    result = None
    if compiledQueries:
        first_run = True
        final = None
        for compiledQuery in compiledQueries:
            if first_run:
                final = compiledQuery
                first_run = False
            else:
                final &= compiledQuery
        final &= Q(category=Category.objects.get(id=query['cat_id']))
        print final
        db_out = Item.objects.filter(final)
        answer = {}
        result = []
        answer['filteredData'] = result
        answer['cat_id'] = query['cat_id']
        for item in db_out:
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
    for name, param_property in repo.param_properties.iteritems():
        for val in repo.property_vals[name]:

            param_type = param_property.param_type.encode("utf-8")
            if param_type == "INT":
                # this should just have 2 values, min and max
                if name in filters:
                    if int(val) > filters[name][1]:
                        filters[name][1] = int(val)
                    if int(val) < filters[name][0]:
                        filters[name][0] = int(val)
                else:
                    filters[name].extend([sys.maxint, -1])
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
