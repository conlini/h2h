from django.shortcuts import render
from tech import *
from django.db.models import Q

# Create your views here.

def home(request):
    return render(request, "tech/home.html", {"filters": get_filters_and_ranges()})


def query(request):
    post = request.POST
    query = post['query']
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
            param_property = properties[k]
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
        result = Item.objects.get(final)

    render(request, "tech/query_results.html", {"filters": get_filters_and_ranges(), "results": result})
