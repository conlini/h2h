from django.test import TestCase

__author__ = 'adityabhasin'
import json
import os

from tech.ingest import ingest_bulk
from h2h.settings import BASE_DIR
from tech.request_handler import get_filters_and_ranges, \
    handle_query_request_internal, save_categories, get_all_categories
from tech.tests import *
import tech.repo as repo


class BaseTests(TestCase):
    def setUp(self):
        """
        Its convenient to leverage on the current load api call to load the data
        with some data as we will have the load function tested separately

        Flip side is if ever change the load function
        :return:
        """
        # FIXME we need a better way to load the db, as the load function may change
        with open(os.path.join(BASE_DIR, "tech", "tests", "test_data",
                               "sample_data.json"), 'r') as d:
            ingest_bulk(json.loads(d.read()))


class FilterAndRanges(BaseTests):
    def test_get_filter_and_ranges(self):
        answer = get_filters_and_ranges()
        self.assertDictEqual(
            {"filters": {"open source": [True, False],
                         "read speed": [1, 999],
                         "type": []},
             "filter_meta": {"type": "TEXT",
                             "open source": "BOOL",
                             "read speed": "INT"}}, answer)


class QueryHandling(BaseTests):
    def test_bool_positive_filter(self):
        answer = handle_query_request_internal(
            {"filters": [{"open source": [True]}], "category": "cat1"})
        self.assertEqual(3, len(answer["filteredData"]))
        self.assertEqual(["item1", "item2", "item4"],
                         [answer['filteredData'][0]["name"],
                          answer['filteredData'][1]["name"],
                          answer['filteredData'][2]["name"]])

    def test_range_filter(self):
        answer = handle_query_request_internal(
            {"filters": [{"read speed": [100, 300]}], "category": "cat1"})
        self.assertEqual(2, len(answer["filteredData"]))
        self.assertEqual(["item1", "item3"],
                         [answer['filteredData'][0]["name"],
                          answer['filteredData'][1]["name"],
                          ])

    def test_bool_negative_filter(self):
        answer = handle_query_request_internal(
            {"filters": [{"open source": [False]}], "category": "cat1"})
        self.assertEqual(5, len(answer["filteredData"]))

    def test_out_of_range_filter(self):
        answer = handle_query_request_internal(
            {"filters": [{"read speed": [1000, 3000]}], "category": "cat1"})
        self.assertEqual(0, len(answer["filteredData"]))

    def test_multiple_filters(self):
        answer = handle_query_request_internal(
            {"filters": [{"read speed": [100, 200]},
                         {"open source": [True]}], "category": "cat1"})
        self.assertEqual(1, len(answer["filteredData"]))
        self.assertEqual(["item1"],
                         [answer['filteredData'][0]["name"]
                          ])


class CategoryTests(TestCase):

    @staticmethod
    def __get_cat(root, cat_name):
        for k,v in root.items():
            if k == "children":
                for branch in v:
                    for x, y in branch.items():
                        if x == "name" and y == cat_name:
                            return branch


    def test_save_categories(self):
        save_categories({"xx": [{"xy": [{"xyx": []}]}, {"xz": []}]})
        xx, c_xx = Category.objects.get_or_create(category_name="xx")
        xy, c_xy = Category.objects.get_or_create(category_name="xy")
        xz, c_xz = Category.objects.get_or_create(category_name="xz")
        xyx, c_xyx = Category.objects.get_or_create(category_name="xyx")
        self.assertFalse(c_xx)
        self.assertFalse(c_xy)
        self.assertFalse(c_xz)
        self.assertFalse(c_xyx)
        cats = get_all_categories()
        interesting_cat = CategoryTests.__get_cat(cats)
        self.assertDictEqual({"name": "xx", "_id": xx.id, "children": [
            {"name": "xy", "_id": xy.id, "children": [{"name": "xyx", "_id": xyx.id, "children": []}]},
            {"name": "xz", "_id": xz.id, "children": []}]}, interesting_cat)
