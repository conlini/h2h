from django.shortcuts import render
from tech import *

# Create your views here.

def home(request):
    render(request, "tech/home.html", {"filters": get_filters_and_ranges()})


def query(request):
    # post = request.POST
    # query = post['query']
    render(request, "tech/query_results.html", {"filters": get_filters_and_ranges(), "results": []})
