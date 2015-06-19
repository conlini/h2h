from django.core import serializers
from django.http import HttpResponse
from tech import *
import json

mimetype_json = "application/json"
serialize_type = "json"

def get_filters(request):
    filters = json.dumps(get_filters_and_ranges())
    return HttpResponse(filters)


def search(request):
    post = request.POST
    query = post['query']
    result = json.dumps(handle_query_request(query))
    return HttpResponse(result)