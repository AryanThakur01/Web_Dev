const express = require("express");
const router = express.Router();

const { getFood } = require("../controller/getFoodData");

router.route("/foodData").get(getFood);

module.exports = router;