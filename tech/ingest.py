from tech import *


def ingest_bulk(data):
    for d in data:
        item = Item(name=d['name'])
        item.save()
        for prop in d['properties']:
            param_name = prop['prop_name']
            param_value = prop['prop_value']

            if not param_name in properties:
                param_property = create_property_for_value(param_name, param_value)
            else :
                param_property = properties[param_name]
            add_value_to_property(param_value, param_property)
            ip = ItemParam(param_name=param_name, param_value=param_value, param_property=param_property, item=item)
            if param_property.param_type == "INT" :
                ip.param_value_as_int = int(param_value)
            ip.save()
