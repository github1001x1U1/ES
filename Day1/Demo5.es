// 创建索引
PUT /user

// 映射规则
PUT /user/_mapping?pretty
{
  "properties": {
    "name": {
      "type": "text",
      "index": true
    },
    "sex": {
      // keywork不能分词
      "type": "keyword",
      "index": true
    },
    "tel": {
      "type": "keyword",
      "index": false
    }
  }
}

// 数据插入
PUT /user/_create/1001
{
  "name": "唐纳德特朗普",
  "sex": "男的",
  "tel": "12328923"
}

// 查询
GET /user/_search
{
  "query": {
    "match": {
      "name": "特"
    }
  }
}

GET /user/_search
{
  "query": {
    "match": {
      "sex": "男"
    }
  }
}

// 返回集群中文档数量
GET /user/_count

// 删除
DELETE /user/_doc/1001