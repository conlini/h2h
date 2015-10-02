var static_data = {
    recent_compares: [],

    compare_items: function(items) {

    },

    filterResults: function(query) {
        //  query : {category: "cat" , filters : [{"param_name" : "param_name" , "filter_val" : []}]}
        console.log(JSON.stringify(query))
        var candidates = this.all_data.slice(0)
        this.all_data.forEach(function(item, index) {
            if (item.category === query.category) {
                // item.parameters.forEach(function(param) {
                for (var i = 0; i < item.parameters.length; i++) {
                    var param = item.parameters[i]

                    if (query.filters.hasOwnProperty(param.param_name)) {
                        var pName = param.param_name;
                        var filter_val = query.filters.pName;
                        var pval = param.param_val;
                        if (typeof(pval) === "boolean") {
                            if (pval != filter_val[0]) {
                                candidates.splice(index, 1);
                                continue;
                            }
                        } else if (typeof(pval) === "number") {
                            if (pval < filter_val[0] || pvar > filter_val[1]) {
                                candidates.splice(index, 1);
                                continue;
                            }
                        }
                    } else {
                        candidates.splice(index, 1)
                    }
                };
            } else {
                candidates.splice(index, 1)
            }
        });
        return candidates;
    },

    filters: {
        "distributed": [true, false],
        "open source": [true, false],
        "active dev": [true, false],
        "support community": [true, false],
        "write speed": [713, 4727],
        "read speed": [643, 4893],
        "released": [854, 4983],
        "type": []
    },

    filter_meta: {
        "distributed": "BOOL",
        "open source": "BOOL",
        "active dev": "BOOL",
        "support community": "BOOL",
        "write speed": "INT",
        "read speed": "INT",
        "released": "INT",
        "type": "STR"
    },

    all_data: [{
        "id": 1,
        "name": "ELK",
        "category": "cat2",
        "parameters": [{
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "released",
            "param_value": "1852"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "released",
            "param_value": "2555"
        }, {
            "param_name": "read speed",
            "param_value": "3005"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "write speed",
            "param_value": "1950"
        }]
    }, {
        "id": 2,
        "name": "mysql",
        "category": "cat1",
        "parameters": [{
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "2784"
        }, {
            "param_name": "released",
            "param_value": "4958"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "2369"
        }, {
            "param_name": "read speed",
            "param_value": "3640"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }]
    }, {
        "id": 3,
        "name": "java",
        "category": "cat3",
        "parameters": [{
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "read speed",
            "param_value": "3804"
        }, {
            "param_name": "released",
            "param_value": "3390"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "released",
            "param_value": "4330"
        }, {
            "param_name": "write speed",
            "param_value": "4314"
        }, {
            "param_name": "write speed",
            "param_value": "4727"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }]
    }, {
        "id": 4,
        "name": "hadoop",
        "category": "cat1",
        "parameters": [{
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "read speed",
            "param_value": "1431"
        }, {
            "param_name": "read speed",
            "param_value": "2488"
        }, {
            "param_name": "read speed",
            "param_value": "2426"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }]
    }, {
        "id": 5,
        "name": "splunk",
        "category": "cat2",
        "parameters": [{
            "param_name": "read speed",
            "param_value": "3963"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "write speed",
            "param_value": "2899"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "released",
            "param_value": "3782"
        }]
    }, {
        "id": 6,
        "name": "hadoop",
        "category": "cat3",
        "parameters": [{
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "write speed",
            "param_value": "4685"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "4293"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "write speed",
            "param_value": "2125"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "search"
        }]
    }, {
        "id": 7,
        "name": "couchbase",
        "category": "cat2",
        "parameters": [{
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "3877"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "read speed",
            "param_value": "3206"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "read speed",
            "param_value": "1058"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }]
    }, {
        "id": 8,
        "name": "hibernate",
        "category": "cat1",
        "parameters": [{
            "param_name": "write speed",
            "param_value": "1223"
        }, {
            "param_name": "released",
            "param_value": "1554"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }]
    }, {
        "id": 9,
        "name": "elasticsearch",
        "category": "cat3",
        "parameters": [{
            "param_name": "read speed",
            "param_value": "1388"
        }, {
            "param_name": "write speed",
            "param_value": "1131"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "write speed",
            "param_value": "3244"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "released",
            "param_value": "3786"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }]
    }, {
        "id": 10,
        "name": "ruby",
        "category": "cat1",
        "parameters": [{
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "854"
        }, {
            "param_name": "read speed",
            "param_value": "2366"
        }, {
            "param_name": "read speed",
            "param_value": "1851"
        }, {
            "param_name": "write speed",
            "param_value": "2298"
        }, {
            "param_name": "write speed",
            "param_value": "2440"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "read speed",
            "param_value": "3161"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "write speed",
            "param_value": "3139"
        }, {
            "param_name": "read speed",
            "param_value": "3343"
        }]
    }, {
        "id": 11,
        "name": "storm",
        "category": "cat1",
        "parameters": [{
            "param_name": "read speed",
            "param_value": "769"
        }, {
            "param_name": "write speed",
            "param_value": "4450"
        }, {
            "param_name": "released",
            "param_value": "2799"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "read speed",
            "param_value": "3843"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "write speed",
            "param_value": "3493"
        }]
    }, {
        "id": 12,
        "name": "gigaspace",
        "category": "cat2",
        "parameters": [{
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "released",
            "param_value": "1085"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "released",
            "param_value": "2875"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "read speed",
            "param_value": "2232"
        }, {
            "param_name": "write speed",
            "param_value": "1003"
        }]
    }, {
        "id": 13,
        "name": "mongo",
        "category": "cat1",
        "parameters": [{
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "write speed",
            "param_value": "3107"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "write speed",
            "param_value": "4694"
        }, {
            "param_name": "write speed",
            "param_value": "3205"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "write speed",
            "param_value": "3100"
        }]
    }, {
        "id": 14,
        "name": "mongo",
        "category": "cat1",
        "parameters": [{
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "released",
            "param_value": "3388"
        }, {
            "param_name": "read speed",
            "param_value": "3878"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "write speed",
            "param_value": "3135"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }]
    }, {
        "id": 15,
        "name": "spring",
        "category": "cat1",
        "parameters": [{
            "param_name": "released",
            "param_value": "3734"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "read speed",
            "param_value": "4337"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }]
    }, {
        "id": 16,
        "name": "spring",
        "category": "cat1",
        "parameters": [{
            "param_name": "released",
            "param_value": "2685"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }]
    }, {
        "id": 17,
        "name": "lucene",
        "category": "cat1",
        "parameters": [{
            "param_name": "write speed",
            "param_value": "2394"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "4706"
        }, {
            "param_name": "released",
            "param_value": "3273"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "read speed",
            "param_value": "4364"
        }, {
            "param_name": "read speed",
            "param_value": "4439"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "released",
            "param_value": "3240"
        }]
    }, {
        "id": 18,
        "name": "python",
        "category": "cat3",
        "parameters": [{
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "released",
            "param_value": "893"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "1834"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "read speed",
            "param_value": "4484"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "write speed",
            "param_value": "3976"
        }]
    }, {
        "id": 19,
        "name": "cassandra",
        "category": "cat3",
        "parameters": [{
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "write speed",
            "param_value": "2538"
        }, {
            "param_name": "read speed",
            "param_value": "2085"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "read speed",
            "param_value": "4893"
        }, {
            "param_name": "read speed",
            "param_value": "650"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "3371"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }]
    }, {
        "id": 20,
        "name": "spring",
        "category": "cat2",
        "parameters": [{
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "released",
            "param_value": "2330"
        }, {
            "param_name": "read speed",
            "param_value": "2127"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "read speed",
            "param_value": "1139"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "1897"
        }, {
            "param_name": "released",
            "param_value": "4855"
        }, {
            "param_name": "released",
            "param_value": "4356"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "write speed",
            "param_value": "4184"
        }]
    }, {
        "id": 21,
        "name": "cassandra",
        "category": "cat3",
        "parameters": [{
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "write speed",
            "param_value": "4639"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }]
    }, {
        "id": 22,
        "name": "ruby",
        "category": "cat3",
        "parameters": [{
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "released",
            "param_value": "2843"
        }, {
            "param_name": "read speed",
            "param_value": "750"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "write speed",
            "param_value": "4016"
        }]
    }, {
        "id": 23,
        "name": "ELK",
        "category": "cat1",
        "parameters": [{
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "in-memory solution"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }]
    }, {
        "id": 24,
        "name": "postgresql",
        "category": "cat1",
        "parameters": [{
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "write speed",
            "param_value": "2480"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "read speed",
            "param_value": "1844"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "read speed",
            "param_value": "649"
        }]
    }, {
        "id": 25,
        "name": "hadoop",
        "category": "cat3",
        "parameters": [{
            "param_name": "released",
            "param_value": "2570"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "distributed",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "read speed",
            "param_value": "3976"
        }]
    }, {
        "id": 26,
        "name": "scala",
        "category": "cat3",
        "parameters": [{
            "param_name": "write speed",
            "param_value": "2339"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "905"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "read speed",
            "param_value": "4157"
        }, {
            "param_name": "released",
            "param_value": "4983"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }]
    }, {
        "id": 27,
        "name": "ELK",
        "category": "cat1",
        "parameters": [{
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "3719"
        }, {
            "param_name": "write speed",
            "param_value": "3193"
        }, {
            "param_name": "write speed",
            "param_value": "1254"
        }, {
            "param_name": "write speed",
            "param_value": "3054"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "released",
            "param_value": "1395"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }]
    }, {
        "id": 28,
        "name": "hadoop",
        "category": "cat2",
        "parameters": [{
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "released",
            "param_value": "1520"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "read speed",
            "param_value": "1959"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }]
    }, {
        "id": 29,
        "name": "lucene",
        "category": "cat2",
        "parameters": [{
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "distributed",
            "param_value": "False"
        }, {
            "param_name": "type",
            "param_value": "search"
        }, {
            "param_name": "type",
            "param_value": "db"
        }, {
            "param_name": "type",
            "param_value": "programming language"
        }, {
            "param_name": "write speed",
            "param_value": "1697"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "support community",
            "param_value": "False"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "type",
            "param_value": "cloud infra"
        }]
    }, {
        "id": 30,
        "name": "python",
        "category": "cat2",
        "parameters": [{
            "param_name": "write speed",
            "param_value": "920"
        }, {
            "param_name": "write speed",
            "param_value": "2953"
        }, {
            "param_name": "write speed",
            "param_value": "713"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "active dev",
            "param_value": "False"
        }, {
            "param_name": "open source",
            "param_value": "False"
        }, {
            "param_name": "read speed",
            "param_value": "2729"
        }, {
            "param_name": "type",
            "param_value": "log analysis"
        }, {
            "param_name": "support community",
            "param_value": "True"
        }, {
            "param_name": "active dev",
            "param_value": "True"
        }]
    }]
}
