__author__ = 'adbhasin'
from tech.tests import *
from tech.ingest import ingest_bulk
import os
import tech.repo as repo

class BaseTests(TestCase):

    def setUp(self):
        '''
        Its convenient to leverage on the current load api call to laod the data
        with some data as we will have the load function tested seperately
        :return:
        '''
        with open(os.path.join(os.getcwd(), "test_data", "sample_data.json"), 'r') as d:
            ingest_bulk(d.read())
        print(repo.param_properties)
        print(repo.property_vals)



class FilterAndRanges(BaseTests):

    def test_get_filter_and_ranges(self):
        pass


class QueryHandling(BaseTests):

    def test_bool_positive_filter(self):
        pass

    def test_range_filter(self):
        pass

    def test_bool_negative_filter(self):
        pass

    def test_out_of_range_filter(self):
        pass

    def test_no_filters_to_apply(self):
        pass

    def test_multiple_filters(self):
        pass