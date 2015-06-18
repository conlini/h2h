from django.core import serializers
from django.http import HttpResponse
from tech import *

mimetype_json = "application/json"
serialize_type = "json"

def get_filters(request):
    filters = serializers.serialize(serialize_type, get_filters_and_ranges())
    return HttpResponse(filters, mimetype=mimetype_json)


def search(request):
    post = request.POST
    query = post['query']
    result = serializers.serialize(serialize_type, handle_query_request())
    return HttpResponse(result, mimetype=mimetype_json)