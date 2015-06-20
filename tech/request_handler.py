from tech import *
from django.db.models import Q
from collections import defaultdict
import tech


def handle_query_request(query):
    '''
        # name : []
        name : [0, 100] Ranges
        name : [key1, key2 , key3] for textual
        name : [True/False] for Boolean

        query : [{name : [], name : []}]
    '''
    compiledQueries = []
    for filter in query:
        for k, v in filter.iteritems():
            param_property = tech.properties[k]
            if param_property.property_type == "INT":
                range_key = "itemparam_param_value_as_int__range"
                compiledQueries.append(Q(itemparam_param_name=k) & Q(range_key=v))
            elif param_property.property_type == "BOOL":
                compiledQueries.append(Q(itemparam_param_name=k) & Q(itemparam_param_value=v[0]))
            else:
                if v:
                    contains_key = "itemparam_param_value__icontains"
                    for val in v:
                        compiledQueries.append(Q(itemparam_param_name=k) & Q(contains_key=val))
    result = None
    if compiledQueries:
        first_run = True
        final = None
        for compiledQuery in compiledQueries:
            if first_run:
                final = compiledQuery
                first_run = False
            else:
                final |= compiledQuery
        db_out = Item.objects.get(final)
        result = []
        for item in db_out:
            this_item = {"name": item.name, "description": item.description}
            this_item_params = []
            for item_param in item.objects.itemparam_set.all():
                this_item_params.append({"param_name": item_param.param_name, "param_value": item_param.param_value})
            this_item["parameters"] = this_item_params
            result.append(this_item)
    return result


def get_filters_and_ranges():
    filters = defaultdict(list)
    for name, param_property in tech.properties.iteritems():
        for val in tech.property_vals[name]:

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
            elif param_type == "BOOL":
                filters[name] = [True, False]
            else:
                filters[name]
    return filters
