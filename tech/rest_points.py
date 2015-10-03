from django.core import serializers
from django.http import HttpResponse
from tech import *
import json
from django.views.decorators.csrf import csrf_protect
from tech.request_handler import *

mimetype_json = "application/json"
serialize_type = "json"


def get_filters(request):
    filters = json.dumps(get_filters_and_ranges())
    return HttpResponse(filters, content_type=mimetype_json)


def search(request):
    post = request.body
    query = json.loads(post.decode("utf-8"))
    result = json.dumps(handle_query_request_internal(query['query']))
    return HttpResponse(result, content_type=mimetype_json)


def get_categories(request):
    categories = json.dumps(get_all_categories())
    return HttpResponse(categories, content_type=mimetype_json)
