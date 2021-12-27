// 多条件查询and
GET /shopping/_search
{
    "query": {
        "bool": {
            // must多个条件必须同时成立
            "must": [
                {
                    "match": {
                        // 查询Apple手机
                        "title": "Apple"
                    }
                },
                {
                    "match": {
                        // 价格为6666
                        "price": 6666
                    }
                }
            ]
        }
    }
}

// 多条件查询or
GET /shopping/_search
{
    "query": {
        "bool": {
            "should": [
                {
                    "match": {
                        // 查询Apple手机
                        "title": "Apple"
                    }
                },
                {
                    "match": {
                        // 查询华为手机
                        "title": "华为"
                    }
                }
            ]
        }
    }
}

// 范围查询(查询价格在4000-6000的手机)
GET /shopping/_search
{
    "query": {
        "bool": {
            "filter": {
                "range": {
                    "price": {
                        // 不支持ge和le
                        "gt": 4000,
                        "lt": 6000
                    }
                }
            }
        }
    }
}
