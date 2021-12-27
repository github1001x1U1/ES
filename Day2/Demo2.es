// Elasticsearch 的集群监控信息中包含了许多的统计数据，其中最为重要的一项就是 集群健康
// status属性
// green:所有的主分片和副本分片都正常运行。
// yellow:所有的主分片都正常运行，但不是所有的副本分片都正常运行。
// red:有主分片没能正常运行。
GET /_count

GET /user/_search
