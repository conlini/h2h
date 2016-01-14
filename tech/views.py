from django.shortcuts import render
import logging

logger = logging.getLogger("h2h")
# Create your views here.

def home(request):
    return render(request, "tech/home.html")

def edit_properties(request):
    return render(request, "tech/edit_properties.html")

def edit_add_product(request):
    return render(request, "tech/add_edit_product.html")