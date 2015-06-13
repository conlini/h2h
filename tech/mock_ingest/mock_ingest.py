import json
import sys

from tech.ingest import ingest_bulk


def ingest(file):
    data = []
    with open(file, 'r') as f:
        for line in f.readline():
            data.append(json.load(line))
    ingest_bulk(data)


if __name__ == "__main__":
    ingest(sys.argv[1])

