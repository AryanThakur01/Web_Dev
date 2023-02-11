const { HttpStatusCode } = require("axios");
const Order = require("../models/Orders");

const orderData = async (req, res) => {
  let eId = await Order.findOne({ email: req.body.email });
  if (eId === null) {
    await Order.create({
      email: req.body.email,
      order_data: { ...req.body.order_data },
    }).then(() => {
      res.status(HttpStatusCode).json({ success: true });
    });
  } else {
    await Order.findOneAndUpdate(
      { email: req.body.email },
      { $push: { order_data: { ...req.body.order_data } } }
    ).then(() => {
      res.status(HttpStatusCode.Ok).json({ success: true });
    });
  }
};

const getMyOrderData = async (req, res) => {
  let myData = await Order.findOne({ email: req.body });
  res.status(HttpStatusCode.Ok).json({ orderData: myData });
};

module.exports = {
  orderData,
  getMyOrderData,
};
