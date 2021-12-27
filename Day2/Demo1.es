// 存储员工信息megacorp:索引名称、employee:索引类型、1:员工_id
PUT /megacorp/employee/1
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}
PUT /megacorp/employee/2
{
    "first_name" :  "Jane",
    "last_name" :   "Smith",
    "age" :         32,
    "about" :       "I like to collect rock albums",
    "interests":  [ "music" ]
}

PUT /megacorp/employee/3
{
    "first_name" :  "Douglas",
    "last_name" :   "Fir",
    "age" :         35,
    "about":        "I like to build cabinets",
    "interests":  [ "forestry" ]
}

// 根据_id检索到单个雇员的数据，_source包含我们需要的信息
GET /megacorp/employee/2

// 搜索所有雇员，hits数组包含我们需要的所有结果
GET /megacorp/employee/_search

// 搜索姓氏为Smith的雇员
GET /megacorp/employee/_search
{
    "query": {
        "match": {
            "last_name": "Smith"
        }
    }
}

// 搜索姓氏为Smith的雇员，年龄大于30岁的
GET /megacorp/employee/_search
{
    "query": {
        "bool": {
            "must": {
                "match": {
                    "last_name": "Smith"
                }
            },
            "filter": {
                "range": {
                "age": { "gt": 30 }
                }
            }
        }
    }
}

// 全文检索-搜索下所有喜欢攀岩（rock climbing）的员工
// Elasticsearch 默认按照相关性得分排序，即每个文档跟查询的匹配程度。
GET /megacorp/employee/_search
{
    "query" : {
        "match" : {
            "about" : "rock climbing"
        }
    }
}

// 短语搜索，同时包含rock和climbing，并且二者以短语rock climbing的形式紧挨着的雇员记录。
GET /megacorp/employee/_search
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    }
}

// 高亮搜索
GET /megacorp/employee/_search
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    },
    "highlight": {
        "fields" : {
            "about" : {}
        }
    }
}

// 删除索引
DELETE /megacorp

// Fielddata is disabled on text fields by default. Set fielddata=true on [inte
// 创建索引和映射，具体原因是聚合需要大量的内存，聚合前，需要将相应的字段开启聚合
PUT /megacorp

PUT /megacorp/_mapping
{
    "properties": {
        "interests": {
            "type": "text",
            "fielddata": true,
            "index": false
        }
    }
}


// 分组聚合查询
GET /megacorp/employee/_search
{
  // 聚合操作
  "aggs": {
    // 分组名称，随意命名
    "all_interests": {
      // 分组
      "terms": { 
          // 分组字段
          "field": "interests"
       }
    }
  }
}

// 如果想知道叫Smith的员工中最受欢迎的兴趣爱好，可以直接构造一个组合查询：
GET /megacorp/employee/_search
{
  "query": {
    "match": {
      "last_name": "smith"
    }
  },
  "aggs": {
    "all_interests": {
      "terms": {
        "field": "interests"
      }
    }
  }
}
