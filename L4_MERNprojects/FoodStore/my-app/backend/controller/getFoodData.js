const food = require("../models/foodData");
const foodCategory = require("../models/foodCategory");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getFood = async (req, res) => {
  const foodCategories = await foodCategory.find({});
  const foods = await food.find({});
  res.status(200).send([foods, foodCategories]);
};

module.exports = { getFood };
