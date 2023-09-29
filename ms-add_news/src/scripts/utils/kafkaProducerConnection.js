const { Kafka, logLevel, CompressionTypes } = require("kafkajs");

class KafkaProducerConnetion {
  constructor(brokers, options = {}) {
    this.kafka = new Kafka({
      clientId: options.clientId || "ms-add_news",
      logLevel: options.logLevel || logLevel.DEBUG,
      brokers: ["localhost:29092", "localhost:39092"],
      options: {
        clientId: "ms-add_news",
      },
    });

    this.producer = this.kafka.producer();
  }

  async connect() {
    try {
      await this.producer.connect();
      console.log("kafka connection successful");
    } catch (error) {
      console.log(error.message);
    }
  }

  async sendMessage(topic, message, key) {
    await this.producer.send({
      topic,
      messages: [{ value: message }],
      compression: CompressionTypes.GZIP,
      key: key,
    });
  }

  async disconnect() {
    await this.producer.disconnect();
  }

  async run(topic, message, key) {
    await this.connect();
    await this.sendMessage(topic, message, key);
    await this.disconnect();
  }
}

module.exports = new KafkaProducerConnetion();
