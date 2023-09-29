const News = require("../models/News")
const baseService = require("./baseService")
class ListNewService extends baseService {
    constructor() {
        super(News)
    }
}

module.exports = new ListNewService()