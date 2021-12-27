// 创建索引(索引等同于数据库)
PUT /shopping

PUT /cluster-2022-10-1

PUT /new_cluster_test_demo

// 查询索引
GET /shopping

// 删除索引
DELETE /shopping

// 添加文档
POST /shopping/_doc
{
    "title": "华为Mate40",
    "price": 4999
}

// 添加文档(自定义ID)
POST /shopping/_doc/1001
{
    "title": "Apple 13",
    "price": 6800
}

// 查询文档(全部)
GET /shopping/_doc/_search

// 查询文档(_id=1001)
GET /shopping/_doc/1001

// 全量修改
PUT /shopping/_doc/1001
{
    "title": "Apple 13",
    "price": 6666
}

// 局部修改
POST /shopping/_update/1001
{
    "doc" : {
        "title": "Apple 13 Pro Max"
    }
}

// 删除文档
DELETE /shopping/_doc/1001
