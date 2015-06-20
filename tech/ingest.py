from tech import *


def ingest_bulk(data):
    load()
    for d in data:
        name = d['name'].encode('utf-8')
        item = Item.objects.get_or_create(name=name)[0]
        for prop in d['properties']:
            param_name = prop['prop_name'].encode('utf-8')
            param_value = prop['prop_value'].encode('utf-8')

            if not param_name in properties:
                param_property = create_property_for_value(param_name, param_value)
            else :
                param_property = properties[param_name]
            add_value_to_property(param_value, param_property)
            ip = find_item_param(item, param_name)
            if not ip:
                ip = ItemParam(param_name=param_name, param_property=param_property, item=item)
            ip.param_value = param_value
            if param_property.param_type == "INT" :
                ip.param_value_as_int = int(param_value)
            ip.save()
