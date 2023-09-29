class BaseService {
  constructor(model) {
    this.BaseModel = model;
  }
  listNews(where) {
    return this.BaseModel.find(where || {});
  }
  insertNews(data) {
    return new this.BaseModel(data).save();
  }
  findNews(where) {
    return this.BaseModel.findOne(where || {});
  }
}

module.exports = BaseService;
