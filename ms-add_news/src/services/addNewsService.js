const News = require("../models/News");
const baseService = require("./baseService");
class newService extends baseService {
  constructor() {
    super(News);
  }
}

module.exports = new newService();
