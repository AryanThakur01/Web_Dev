const { HttpStatusCode } = require("axios");
const express = require("express");
const router = express.Router();
const { getMyOrderData, orderData } = require("../controller/orderData");


router.route("/orderData").get(getMyOrderData).post(orderData);

module.exports = router;
