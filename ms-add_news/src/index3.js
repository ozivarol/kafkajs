const kafka = require("kafka-node");
const Producer = kafka.Producer;

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" }); // Kafka broker adresini ve portunu burada belirtin
const producer = new Producer(client);

producer.on("ready", () => {
  console.log("Kafka producer is ready.");

  // Göndermek istediğiniz mesajı ve konuyu burada tanımlayın
  const message = "Merhaba, Kafkam2!";
  const topic = "news.topic"; // Kafka konu adınızı buraya ekleyin

  const payloads = [
    {
      topic: topic,
      messages: message,
    },
  ];

  producer.send(payloads, (error, data) => {
    if (error) {
      console.error("Kafka producer error:", error);
    } else {
      console.log("Kafka producer sent a message:", data);
    }
  });
});

producer.on("error", (err) => {
  console.error("Kafka producer error:", err);
});

const Consumer = kafka.Consumer;
const consumer = new Consumer(client, [{ topic: "news.topic" }], {
  groupId: "your-consumer-group", // Tüketici grubu adını belirtin
});

consumer.on("message", (message) => {
  console.log("Received message:", message.value);
  // Mesajı işleyin veya kaydedin
});

consumer.on("error", (err) => {
  console.error("Kafka consumer error:", err);
});

// // Consuming
// await consumer.connect();
// await consumer.subscribe({ topic: "news.topic", fromBeginning: true });

// await consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log({
//       partition,
//       offset: message.offset,
//       value: message.value.toString(),
//     });
//   },
// });

//   const consumer = kafka.consumer({ groupId: "test-group" });
