const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter the email"],
  },
  order_data: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("orders", OrderSchema);