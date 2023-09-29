const { Kafka } = require("kafkajs");

const kafkaConsumer = async () => {
  const kafka = new Kafka({
    clientId: "ms_list_news",
    brokers: ["localhost:29092"],
  });
  const consumer = kafka.consumer({ groupId: "ms_list_news" });
  await consumer.connect();
  await consumer.subscribe({ topic: "newstopic", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      console.log("girdim");
      console.log({
        value: message.value,
      });
    },
  });
};



module.exports = {
  kafkaConsumer,
};
