const hs = require("http-status");
const { kafkaConsumer } = require("../scripts/utils/kafkaConsumerConnection2");

class listNewsController {
  async listNews(req, res, next) {
    try {
      const data = await kafkaConsumer();
      const parsedData = data.map((item) => {
        return {
          ...item,
          value: JSON.parse(item.value),
        };
      });
      res.status(hs.OK).send(parsedData);
    } catch (error) {
      console.error("Error setting up consumer:", error);
      res
        .status(hs.INTERNAL_SERVER_ERROR)
        .send("An error occurred while setting up the consumer.");
    }
  }
}

module.exports = new listNewsController();
