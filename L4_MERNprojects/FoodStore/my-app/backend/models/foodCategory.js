const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  CategoryName: String,
});

module.exports = mongoose.model("foodCategory", categorySchema);
