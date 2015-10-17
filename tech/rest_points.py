from django.core import serializers
from django.http import HttpResponse
from tech import *
import json
from django.views.decorators.csrf import csrf_protect
from tech.request_handler import *

mimetype_json = "application/json"
serialize_type = "json"


def get_filters(request, cat_id=None):
    filters = json.dumps(get_filters_and_ranges(int(cat_id)))
    return HttpResponse(filters, content_type=mimetype_json)


def search(request):
    post = request.body
    query = json.loads(post.decode("utf-8"))
    result = json.dumps(handle_query_request_internal(query['query']))
    return HttpResponse(result, content_type=mimetype_json)


def get_categories(request):
    categories = json.dumps(get_all_categories())
    return HttpResponse(categories, content_type=mimetype_json)


def save_categories(request):
    input = json.loads(request.body.decode("utf-8"))
    save_categories_internal(input)
    return HttpResponse(status=201)


def save_category_properties(request, cat_id):
    input = json.loads(request.body.decode("utf-8"))
    save_category_properties_internal(int(cat_id), input)
    return HttpResponse(status=201)


def get_properties_for_category(reqeust, cat_id):
    __props = get_properties_for_category_internal(int(cat_id))
    answer = json.dumps(__props)
    return HttpResponse(answer, content_type=mimetype_json)

def save_items(request):
    input = json.loads(request.body.decode("utf-8"))
    save_items_interna(input)
    return HttpResponse(status=201)
