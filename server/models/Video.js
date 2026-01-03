const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  thumbnail: String,
  description: String,
  category: {
    type: String,
    enum: ["Nifty", "BankNifty", "Stock Analysis", "Education"]
  },
  date: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("videos", videoSchema);
