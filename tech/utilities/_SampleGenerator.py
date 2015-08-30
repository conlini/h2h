__author__ = 'adityabhasin'
import random

from faker import Faker
from faker.providers import BaseProvider


class TechDataProvider(BaseProvider):
    base = '"name" : "{{att_name}}", "category" : "{{ cat_name }}", "properties" : '

    # bunch of pattersn for the Item properties. These are randomly chosed per item
    property_patterns = ['{"prop_name" : "{{prop_name_number}}" , "prop_value" :  "{{prop_value_number}}"}',
                         '{"prop_name" : "{{prop_name_flag}}" , "prop_value" :  "{{prop_value_flag}}"}',

                         '{"prop_name" : "{{prop_name_simple}}" , "prop_value" :  "{{prop_value_simple}}"}']



    # Attribute/Item names.
    att_names = ["cassandra", "mongo", "elasticsearch", "lucene", "hibernate", "gigaspace", "storm", "oracle", "python",
                 "java", "ruby", "spring", "scala", "mysql", "postgresql", "couchbase", "hadoop", "ELK", "splunk"]

    # A set of properties for techs that have number based values. Values are a random generated number
    prop_name_numbers = ["write speed", "read speed", "released"]

    # A set of properties for techs that have flag based values
    prop_name_flags = ["distributed", "open source", "active dev", "support community"]
    prop_value_flags = ["True", "False"]

    # A set of properties for tech that are strings. The _value_simples are the set of values that can be chosen
    prop_name_simples = ["type", ]
    # Values that can be permuted against the prop_name_simples
    prop_value_simples = ["db", "search", "programming language", "cloud infra", "in-memory solution", "log analysis"]

    cat_names = ["cat1", "cat2", "cat3"]



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
        # range for any number properties from which a random number will be created
        # the parser expects all values to be strings, so wrapping around str
        return str(random.randint(500, 5000))

    @classmethod
    def prop_name_flag(cls):
        return cls.random_element(cls.prop_name_flags)

    @classmethod
    def prop_value_flag(cls):
        return cls.random_element(cls.prop_value_flags)

    @classmethod
    def cat_name(cls):
        return cls.random_element(cls.cat_names)

    # for each loop generate a pattern by created a random number of propertes for each Item. These will then be parsed
    # by the generator and use the values in arrays above to randomly create sample data
    def generate_pattern(self):
        props = []
        for i in range(random.randint(10,15)):
            props.append(self.random_element(self.property_patterns))
        return "{" + self.base + "[" + ",".join(props) + "]}"


if __name__ == "__main__":
    fake = Faker()
    fake.add_provider(TechDataProvider)
    # fake.seed(1234)
    # create 10 items, increase for more
    for _ in range(30):
        print fake.tech_data()
