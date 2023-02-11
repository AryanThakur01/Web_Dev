const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: [true, "Enter the Category"],
  },
  name: {
    type: String,
    required: [true, "Enter the Name"],
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: [true, "Enter the product description"],
  },
  options: [
    {
      half: {
        type: String,
        required: [false],
      },
      full: {
        type: String,
        required: [false],
      },
      regular: {
        type: String,
        required: [false],
      },
      medium: {
        type: String,
        required: [false],
      },
      large: {
        type: String,
        required: [false],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Food", foodSchema);
