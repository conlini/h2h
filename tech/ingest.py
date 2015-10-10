import tech.repo as repo
from tech.models import *


def ingest_bulk(data):
    repo.load()
    for d in data:
        category_name = d['category']
        category = Category.objects.get_or_create(category_name=category_name)[0]
        name = d['name']
        item = Item.objects.get_or_create(name=name, category=category)[0]
        for prop in d['properties']:
            param_name = prop['prop_name']
            param_value = prop['prop_value']

            if not param_name in repo.param_properties:
                param_property = repo.create_property_for_value(param_name, param_value, category)
            else :
                param_property = repo.param_properties[param_name]
            repo.add_value_to_property(param_value, param_property)
            ip = repo.find_item_param(item, param_name)
            if not ip:
                ip = ItemParam(param_name=param_name, param_property=param_property, item=item)
            ip.param_value = param_value
            if param_property.param_type == "INT" :
                ip.param_value_as_int = int(param_value)
            ip.save()
