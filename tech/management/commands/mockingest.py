import json

from tech.repo import ingest_bulk
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = "bulk mock data ingest"

    def add_arguments(self, parser):
        parser.add_argument("data", nargs="+", type=str)


    def handle(self, *args, **options):
        in_file = options['data']
        self.stdout.write("Bulk ingesting data")
        self.ingest(in_file[0])

    def ingest(self, file):
        data = []
        with open(file, 'r') as f:
            for line in f.read().splitlines():
                data.append(json.loads(line))
                # print line
        ingest_bulk(data)