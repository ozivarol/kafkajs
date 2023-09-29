const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    news_type: String,
    priority: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("news", NewsSchema);
