const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { BadRequestError, Unauthenticated } = require("../errors");

const authenticateUser = async (req, res, next) => {
  // check Header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new BadRequestError("Sign in/Sign up to continue");

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    throw new Unauthenticated("You are not a registered user");
  }
};

module.exports = { authenticateUser };
