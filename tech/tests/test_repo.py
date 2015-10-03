__author__ = 'adityabhasin'
from tech.tests import *
import tech.repo as repo


class RepoTests(TestCase):
    def setUp(self):
        self.p = ParamProperty(param_type="BOOL", param_name="test")
        self.p.save()
        ParamValue(param_value="val", param_property=self.p).save()
        repo.load()

    @classmethod
    def tearDownClass(cls):
        repo.param_properties.pop("test")
        repo.property_vals.pop("test")


    def test_add_value_to_property(self):
        repo.add_value_to_property("val2", self.p)
        self.assertDictEqual({"test": ["val", "val2"]}, repo.property_vals)
        self.assertEqual(2, ParamValue.objects.count())

    def test_property_has_value(self):
        self.assertTrue(repo.property_has_value("test", "val"))
        self.assertFalse(repo.property_has_value("test", "val3"))

    def test_create_prop_for_value(self):
        repo.create_property_for_value("test2", "123")
        self.assertDictEqual({"test": ["val", "val2"]}, repo.property_vals)
        self.assertEqual(2, len(repo.param_properties))
        self.assertEqual(2, ParamProperty.objects.count())

    def test_find_item_param(self):
        c = Category(category_name="t1")
        c.save()
        i = Item(name="item1", category=c)
        i.save()
        ip = ItemParam(param_name="test", param_value="v", item=i, param_property=self.p)
        ip.save()
        answer = repo.find_item_param(i, "test")
        self.assertEqual(ip, answer)
        answer = repo.find_item_param(i, "test2")
        self.assertIsNone(answer)
