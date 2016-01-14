from django.conf.urls import url
from tech.views import *
from tech.rest_points import *

urlpatterns = [

    # BEGIN PAGE RENDER URLS
    url(r'^$', home),
    url(r'^properties/edit$' , edit_properties),
    url(r'^product/edit$', edit_add_product),
    # END PAGE RENDER URS

    # BEGIN REST END POINTS
    url(r'rest/(?P<cat_id>[0-9]+)/filters/$', get_filters),
    url(r'rest/filters/$', get_filters),
    url(r'rest/query/$', search),
    url(r'rest/categories/$', get_categories),
    url(r'rest/categories/save/$', save_categories),
    url(r'rest/(?P<cat_id>[0-9]+)/properties/$', get_properties_for_category),
    url(r'rest/(?P<cat_id>[0-9]+)/properties/save/$', save_category_properties),
    url(r'rest/items/save/$', save_items),
    # END REST END POINTS

]
