const addNewsService = require("../services/addNewsService");
const hs = require("http-status");
const kafkaProducerConnetion = require("../scripts/utils/kafkaProducerConnection");

class addNewsController {
  async createNews(req, res, next) {
    addNewsService
      .insertNews(req.body)
      .then(async (createNews) => {
        try {
          console.log(createNews);
          const newsData = JSON.stringify(createNews);
          await kafkaProducerConnetion.run(
            "newstopic",
            newsData,
            "ms-add_news"
          );
        } catch (error) {
          console.log(error);
        }
        res.status(hs.OK).send(createNews);
      })
      .catch((error) => console.log(error));
  }
}

module.exports = new addNewsController();
