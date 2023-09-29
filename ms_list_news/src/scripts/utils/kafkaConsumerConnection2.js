const kafka = require("kafka-node");

const kafkaConsumer = () => {
  return new Promise((resolve, reject) => {
    const receivedMessages = [];
    const client = new kafka.KafkaClient({
      kafkaHost: "localhost:39092",
      zookeeper: "localhost:2181",
    });
    const client2 = new kafka.KafkaClient({
      kafkaHost: "localhost:29092",
    });
    const Consumer = kafka.Consumer;
    const consumer2 = new Consumer(client2, [{ topic: "newstopic" }], {
      groupId: "ms_list_news",
      fromOffset: "earliest",
      offset: 10000,
      encoding: "utf8",
    });
    const consumer = new Consumer(client, [{ topic: "newstopic" }], {
      groupId: "ms_list_news",
      fromOffset: "earliest",
      offset: 10000,
      encoding: "utf8",
    });

    consumer.on("message", (message) => {
      receivedMessages.push(message);
      console.log("Received message:", message.value);
    });
    consumer2.on("message", (message) => {
      receivedMessages.push(message);
      console.log("Received message:", message.value);
    });

    consumer.on("error", (err) => {
      console.error("Kafka consumer error:", err);
      reject(err);
    });
    consumer2.on("error", (err) => {
      console.error("Kafka consumer error:", err);
      reject(err);
    });

    consumer.on("offsetOutOfRange", (err) => {
      console.error("Kafka offset out of range error:", err);
      resolve(receivedMessages);
    });
    consumer2.on("offsetOutOfRange", (err) => {
      console.error("Kafka offset out of range error:", err);
      resolve(receivedMessages);
    });

    consumer.on("done", () => {
      resolve(receivedMessages);
    });
    consumer2.on("done", () => {
      resolve(receivedMessages);
    });
  });
};

module.exports = {
  kafkaConsumer,
};
