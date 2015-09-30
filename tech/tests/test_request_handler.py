__author__ = 'adbhasin'
import json

from tech.tests import *
from tech.ingest import ingest_bulk
import os
from h2h.settings import BASE_DIR
from tech.request_handler import get_filters_and_ranges, \
    handle_query_request_internal


class BaseTests(TestCase):
    def setUp(self):
        '''
        Its convenient to leverage on the current load api call to load the data
        with some data as we will have the load function tested separately

        Flip side is if ever change the load function
        :return:
        '''
        # FIXME we need a better way to load the db, as the load function may change
        with open(os.path.join(BASE_DIR, "tech", "tests", "test_data",
                               "sample_data.json"), 'r') as d:
            ingest_bulk(json.loads(d.read()))


class FilterAndRanges(BaseTests):
    def test_get_filter_and_ranges(self):
        answer = get_filters_and_ranges()
        self.assertDictContainsSubset(
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
                         [answer['filteredData'][0]["name"].encode('utf-8'),
                          answer['filteredData'][1]["name"].encode('utf-8'),
                          answer['filteredData'][2]["name"].encode('utf-8')])

    def test_range_filter(self):
        answer = handle_query_request_internal(
            {"filters": [{"read speed": [100, 300]}], "category": "cat1"})
        self.assertEqual(2, len(answer["filteredData"]))
        self.assertEqual(["item1", "item3"],
                         [answer['filteredData'][0]["name"].encode('utf-8'),
                          answer['filteredData'][1]["name"].encode('utf-8'),
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
                         [answer['filteredData'][0]["name"].encode('utf-8')
                          ])