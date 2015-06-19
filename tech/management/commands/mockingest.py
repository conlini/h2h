import json
import os

from tech.ingest import ingest_bulk
from django.core.management.base import CommandError, BaseCommand

class Command(BaseCommand):
    help = "bulk mock data ingest"

    def add_arguments(self, parser):
        parser.add_argument("data", nargs="+", type=str)


    def handle(self, *args, **options):
        in_file = options['data']
        self.stdout.write("Bulk ingesting data.txt")
        self.ingest(in_file[1])

    def ingest(self, file):
        data = []
        with open(file, 'r') as f:
            for line in f.read().splitlines():
                data.append(json.loads(unicode(line, "latin-1")))
                # print line
        ingest_bulk(data)