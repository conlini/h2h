from django.shortcuts import render

from tech import *
from request_handler import *

# Create your views here.

def home(request):
    return render(request, "tech/home.html")


def query(request):
    print "query me"
    post = request.POST
    query = post['query']
    '''
        # name : []
        name : [0, 100] Ranges
        name : [key1, key2 , key3] for textual
        name : [True/False] for Boolean

        query : [{name : [], name : []}]
    '''
    result = handle_query_request(query)

    render(request, "tech/query_results.html", {"filters": get_filters_and_ranges(), "results": result})
