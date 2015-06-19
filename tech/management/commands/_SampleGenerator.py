__author__ = 'adityabhasin'
import random

from faker import Faker
from faker.providers import BaseProvider


class Provider(BaseProvider):
    FORMATS = ["{{ first }} {{ second}}", ]
    base = '"name" : "{{att_name}}", "properties" : '
    property_patterns = ['{"prop_name" : "{{prop_name_number}}" , "prop_value" :  "{{prop_value_number}}"}',
                         '{"prop_name" : "{{prop_name_flag}}" , "prop_value" :  "{{prop_value_flag}}"}',

                         '{"prop_name" : "{{prop_name_simple}}" , "prop_value" :  "{{prop_value_simple}}"}']



    att_names = ["cassandra", "mongo", "elasticsearch", "lucene", "hibernate", "gigaspace", "storm", "oracle", "python",
                 "java", "ruby"]


    prop_name_numbers = ["write speed", "read speed", "released"]

    prop_name_flags = ["distributed", "open source", "active dev", "support community"]
    prop_value_flags = ["True", "False"]

    prop_name_simples = ["type", ]
    prop_value_simples = ["db", "search", "programming language", "cloud infra", "in-memory solution"]



    fx = [
        "{ 'name' : '{{ att_name }}', 'description' : '{{ att_desc }}', 'properties' : [{ 'prop_name' : '{{ prop_name }}' , 'prop_value' :  {{ prop_value}' ]}", ]



    def tech_data(self):
        current = self.generate_pattern()
        return self.generator.parse(current)


    @classmethod
    def att_name(cls):
        return cls.random_element(cls.att_names)

    @classmethod
    def att_desc(cls):
        return cls.random_element(cls.att_names)

    @classmethod
    def prop_name_simple(cls):
        return cls.random_element(cls.prop_name_simples)

    @classmethod
    def prop_value_simple(cls):
        return cls.random_element(cls.prop_value_simples)

    @classmethod
    def prop_name_number(cls):
       return cls.random_element(cls.prop_name_numbers)

    @classmethod
    def prop_value_number(cls):
        return random.randint(500, 5000)

    @classmethod
    def prop_name_flag(cls):
        return cls.random_element(cls.prop_name_flags)

    @classmethod
    def prop_value_flag(cls):
        return cls.random_element(cls.prop_value_flags)

    def generate_pattern(self):
        props = []
        for i in range(random.randint(10,15)):
            props.append(self.random_element(self.property_patterns))
        return "{" + self.base + "[" + ",".join(props) + "]}"


if __name__ == "__main__":
    fake = Faker()
    fake.add_provider(Provider)
    # fake.seed(1234)
    for _ in range(10):
        print fake.tech_data()
