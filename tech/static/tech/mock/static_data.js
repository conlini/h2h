var static_data = {
    recent_compares = []

    filters: {
        "distributed": [true, false],
        "open source": [true, false],
        "active dev": [true, false],
        "support community": [true, false],
        "write speed": [500, 23423],
        "read speed": [234, 1341],
        "released": [true, false],
        "type": []
    },

    filter_meta: {
        "distributed": "BOOL",
        "open source": "BOOL",
        "active dev": "BOOL",
        "support community": "BOOL",
        "write speed": "INT",
        "read speed": "INT",
        "released": "BOOL",
        "type": "STR"
    },

    all_data: [{
        "name": "ELK",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "released",
            "prop_value": "1852"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "released",
            "prop_value": "2555"
        }, {
            "prop_name": "read speed",
            "prop_value": "3005"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "write speed",
            "prop_value": "1950"
        }]
    }, {
        "name": "mysql",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "2784"
        }, {
            "prop_name": "released",
            "prop_value": "4958"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "2369"
        }, {
            "prop_name": "read speed",
            "prop_value": "3640"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }]
    }, {
        "name": "java",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "read speed",
            "prop_value": "3804"
        }, {
            "prop_name": "released",
            "prop_value": "3390"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "released",
            "prop_value": "4330"
        }, {
            "prop_name": "write speed",
            "prop_value": "4314"
        }, {
            "prop_name": "write speed",
            "prop_value": "4727"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }]
    }, {
        "name": "hadoop",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "read speed",
            "prop_value": "1431"
        }, {
            "prop_name": "read speed",
            "prop_value": "2488"
        }, {
            "prop_name": "read speed",
            "prop_value": "2426"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }]
    }, {
        "name": "splunk",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "read speed",
            "prop_value": "3963"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "write speed",
            "prop_value": "2899"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "released",
            "prop_value": "3782"
        }]
    }, {
        "name": "hadoop",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "write speed",
            "prop_value": "4685"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "4293"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "write speed",
            "prop_value": "2125"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }]
    }, {
        "name": "couchbase",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "3877"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "read speed",
            "prop_value": "3206"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "read speed",
            "prop_value": "1058"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }]
    }, {
        "name": "hibernate",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "write speed",
            "prop_value": "1223"
        }, {
            "prop_name": "released",
            "prop_value": "1554"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }]
    }, {
        "name": "elasticsearch",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "read speed",
            "prop_value": "1388"
        }, {
            "prop_name": "write speed",
            "prop_value": "1131"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "write speed",
            "prop_value": "3244"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "released",
            "prop_value": "3786"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }]
    }, {
        "name": "ruby",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "854"
        }, {
            "prop_name": "read speed",
            "prop_value": "2366"
        }, {
            "prop_name": "read speed",
            "prop_value": "1851"
        }, {
            "prop_name": "write speed",
            "prop_value": "2298"
        }, {
            "prop_name": "write speed",
            "prop_value": "2440"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "read speed",
            "prop_value": "3161"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "write speed",
            "prop_value": "3139"
        }, {
            "prop_name": "read speed",
            "prop_value": "3343"
        }]
    }, {
        "name": "storm",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "read speed",
            "prop_value": "769"
        }, {
            "prop_name": "write speed",
            "prop_value": "4450"
        }, {
            "prop_name": "released",
            "prop_value": "2799"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "read speed",
            "prop_value": "3843"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "write speed",
            "prop_value": "3493"
        }]
    }, {
        "name": "gigaspace",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "released",
            "prop_value": "1085"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "released",
            "prop_value": "2875"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "read speed",
            "prop_value": "2232"
        }, {
            "prop_name": "write speed",
            "prop_value": "1003"
        }]
    }, {
        "name": "mongo",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "write speed",
            "prop_value": "3107"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "write speed",
            "prop_value": "4694"
        }, {
            "prop_name": "write speed",
            "prop_value": "3205"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "write speed",
            "prop_value": "3100"
        }]
    }, {
        "name": "mongo",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "released",
            "prop_value": "3388"
        }, {
            "prop_name": "read speed",
            "prop_value": "3878"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "write speed",
            "prop_value": "3135"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }]
    }, {
        "name": "spring",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "released",
            "prop_value": "3734"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "read speed",
            "prop_value": "4337"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }]
    }, {
        "name": "spring",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "released",
            "prop_value": "2685"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }]
    }, {
        "name": "lucene",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "write speed",
            "prop_value": "2394"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "4706"
        }, {
            "prop_name": "released",
            "prop_value": "3273"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "read speed",
            "prop_value": "4364"
        }, {
            "prop_name": "read speed",
            "prop_value": "4439"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "released",
            "prop_value": "3240"
        }]
    }, {
        "name": "python",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "released",
            "prop_value": "893"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "1834"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "read speed",
            "prop_value": "4484"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "write speed",
            "prop_value": "3976"
        }]
    }, {
        "name": "cassandra",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "write speed",
            "prop_value": "2538"
        }, {
            "prop_name": "read speed",
            "prop_value": "2085"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "read speed",
            "prop_value": "4893"
        }, {
            "prop_name": "read speed",
            "prop_value": "650"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "3371"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }]
    }, {
        "name": "spring",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "released",
            "prop_value": "2330"
        }, {
            "prop_name": "read speed",
            "prop_value": "2127"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "read speed",
            "prop_value": "1139"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "1897"
        }, {
            "prop_name": "released",
            "prop_value": "4855"
        }, {
            "prop_name": "released",
            "prop_value": "4356"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "write speed",
            "prop_value": "4184"
        }]
    }, {
        "name": "cassandra",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "write speed",
            "prop_value": "4639"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }]
    }, {
        "name": "ruby",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "released",
            "prop_value": "2843"
        }, {
            "prop_name": "read speed",
            "prop_value": "750"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "write speed",
            "prop_value": "4016"
        }]
    }, {
        "name": "ELK",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "in-memory solution"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }]
    }, {
        "name": "postgresql",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "write speed",
            "prop_value": "2480"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "read speed",
            "prop_value": "1844"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "read speed",
            "prop_value": "649"
        }]
    }, {
        "name": "hadoop",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "released",
            "prop_value": "2570"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "distributed",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "read speed",
            "prop_value": "3976"
        }]
    }, {
        "name": "scala",
        "category": " cat3 ",
        "properties": [{
            "prop_name": "write speed",
            "prop_value": "2339"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "905"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "read speed",
            "prop_value": "4157"
        }, {
            "prop_name": "released",
            "prop_value": "4983"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }]
    }, {
        "name": "ELK",
        "category": " cat1 ",
        "properties": [{
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "3719"
        }, {
            "prop_name": "write speed",
            "prop_value": "3193"
        }, {
            "prop_name": "write speed",
            "prop_value": "1254"
        }, {
            "prop_name": "write speed",
            "prop_value": "3054"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "released",
            "prop_value": "1395"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }]
    }, {
        "name": "hadoop",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "released",
            "prop_value": "1520"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "read speed",
            "prop_value": "1959"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }]
    }, {
        "name": "lucene",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "distributed",
            "prop_value": "False"
        }, {
            "prop_name": "type",
            "prop_value": "search"
        }, {
            "prop_name": "type",
            "prop_value": "db"
        }, {
            "prop_name": "type",
            "prop_value": "programming language"
        }, {
            "prop_name": "write speed",
            "prop_value": "1697"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "support community",
            "prop_value": "False"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "type",
            "prop_value": "cloud infra"
        }]
    }, {
        "name": "python",
        "category": " cat2 ",
        "properties": [{
            "prop_name": "write speed",
            "prop_value": "920"
        }, {
            "prop_name": "write speed",
            "prop_value": "2953"
        }, {
            "prop_name": "write speed",
            "prop_value": "713"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "active dev",
            "prop_value": "False"
        }, {
            "prop_name": "open source",
            "prop_value": "False"
        }, {
            "prop_name": "read speed",
            "prop_value": "2729"
        }, {
            "prop_name": "type",
            "prop_value": "log analysis"
        }, {
            "prop_name": "support community",
            "prop_value": "True"
        }, {
            "prop_name": "active dev",
            "prop_value": "True"
        }]
    }],

    get_compares_by_top: function() {
        // alert("hellow")
    }

    
}
