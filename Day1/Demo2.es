// 条件查询查询Apple手机
GET /shopping/_search
{
    "query": {
        "match": {
            "title": "Apple"
        }
    }
}

// 全部数据查询
GET /shopping/_search
{
    "query": {
        "match_all": { }
    }
}

// 分页查询
GET /shopping/_search
{
    "query": {
        "match_all": { }
    },
    // 起始文档
    "from": 0,
    // 每页大小
    "size": 2
}

// 只显示特定字段
GET /shopping/_search
{
    "query": {
        "match_all": { }
    },
    "_source": ["title"]
}

// 排序查询(针对价格排序)
GET /shopping/_search
{
    "query": {
        "match_all": { }
    },
    "sort": {
        "price": {
            // asc小到大排序，desc大到小排序
            "order": "desc"
        }
    }
}

