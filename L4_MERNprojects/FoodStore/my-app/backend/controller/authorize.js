const User = require("../models/user");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new BadRequestError("Please Enter your Email and password");

  const user = await User.findOne({ email });
  if (!user) throw new BadRequestError("You are not signed in");

  const isPassword = user.comparePassword(password);
  if (!isPassword) {
    throw new BadRequestError("Incorrect password");
  }

  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email }, token });
};

module.exports = { register, login };
