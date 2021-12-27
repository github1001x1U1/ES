// 全文检索 - 倒排索引
GET /shopping/_search
{
    "query": {
        "match": {
            "title": "为"
        }
    }
}

// 高亮显示
GET /shopping/_search
{
    "query": {
        "match": {
            "title": "华为"
        }
    },
    "highlight": {
        "fields": {
            "title": { }
        }
    }
}

// 分组聚合查询
GET /shopping/_search
{
    // 聚合操作
    "aggs": {
        // 分组名称，随意命名
        "price_group": {
            // 分组
            "terms": {
                // 分组字段
                "field": "price"
            }
        }
    }
}

// 分组聚合查询(屏蔽原始数据)
GET /shopping/_search
{
    "aggs": {
        "price_group": {
            "terms": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}

// 平均值聚合查询
GET /shopping/_search
{
    "aggs": {
        "price_avg": {
            "avg": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}

// 最大值聚合查询
GET /shopping/_search
{
    "aggs": {
        "price_max": {
            "max": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}

// 最小值聚合查询
GET /shopping/_search
{
    "aggs": {
        "price_min": {
            "min": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}

// 统计聚合查询
GET /shopping/_search
{
    "aggs": {
        "price_cardinality": {
            "cardinality": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}

// 累加和聚合查询
GET /shopping/_search
{
    "aggs": {
        "price_sum": {
            "sum": {
                "field": "price"
            }
        }
    },
    // 屏蔽原始数据
    "size": 0
}