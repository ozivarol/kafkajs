# kafkajs

# topic oluşturma : docker exec -it kafka-kafka-1-1 kafka-topics --create --topic newstopic --partitions 1 --replication-factor 2 --bootstrap-server kafka-kafka-1-1:29092
# ayağa kaldırma : docker-compose -f docker-compose.yml up -d
# topic silme :  docker exec -it kafka-kafka-1-1 kafka-topics --delete --topic newstopic --bootstrap-server kafka-kafka-1-1:29092
# docker exec -it kafka-kafka-2-1 kafka-topics --delete --topic newstopic --bootstrap-server kafka-kafka-2-1:39092
# topic listeleme:docker exec -it kafka-kafka-1-1 kafka-topics --list --bootstrap-server kafka-kafka-1-1:29092
# leader broker : docker exec -it kafka-kafka-2-1 kafka-topics --describe --topic newstopic --bootstrap-server kafka-kafka-2-1:39092
# docker exec -it kafka-kafka-1-1 kafka-topics --describe --topic newstopic --bootstrap-server kafka-kafka-1-1:29092

# her js projesinin içine girip npm install komutunu çalıştırmalısın
# apileri ayağa kaldırmak için cd ile içine girip npm start komunutu koşmanız gerekcek
# next.js projesi için'de npm run dev komutunu çalıştırmalısın.

