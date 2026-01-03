const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  excerpt: String,
  content: String,
  image: String,
  category: String,
  readTime: String,
  author: { type: String, default: "Trading Titans" },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("blog", blogSchema);
