__author__ = 'adityabhasin'
from tech.tests import *
import tech.repo as repo


class RepoTests(TestCase):
    def setUp(self):
        self.a = self.__createCategory("A")
        self.b = self.__createCategory("B", self.a)
        self.c = self.__createCategory("C", self.a)
        self.l = self.__createCategory("L", self.b)
        self.m = self.__createCategory("M", self.c)

        self.p = ParamProperty(param_type="BOOL", param_name="test", category=self.a)
        self.p.save()

        ParamValue(param_value="val", param_property=self.p).save()
        repo.load()

    @classmethod
    def tearDownClass(cls):
        repo.param_properties.pop("test", None)
        repo.property_vals.pop("test", None)

    def test_add_value_to_property(self):
        repo.add_value_to_property("val2", self.p)
        self.assertDictEqual({"test": ["val", "val2"]}, repo.property_vals)
        self.assertEqual(2, ParamValue.objects.count())

    def test_property_has_value(self):
        self.assertTrue(repo.property_has_value("test", "val"))
        self.assertFalse(repo.property_has_value("test", "val3"))

    def test_create_prop_for_value(self):
        repo.create_property_for_value("test2", "123", self.a)
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

    def __createCategory(self, name, parent=None):
        a = Category(category_name=name)
        if parent:
            a.parent_id = parent.id
        a.save()
        return a

    def test_load(self):
        self.maxDiff = None
        self.assertDictEqual({"name": "root", "children": [
            {"name": "A", "_id": self.a.id, "children": [
                {"name": "B", "_id": self.b.id, "children": [
                    {"name": "L", "_id": self.l.id, "children": []}]},
                {"name": "C", "_id": self.c.id, "children": [
                    {"name": "M", "_id": self.m.id, "children": []}]}]}]},
                             repo.category_hierarchy)
