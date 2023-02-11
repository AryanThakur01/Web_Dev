const Users = require("../models/user");

//  /getUsers?search=piyush
const getUsers = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const usrs = await Users.find(keyword);
  console.log(usrs);

  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;

  const users = await Users.find({})
    .limit(limit)
    .skip(skip)
    .select("name email -_id");

  res.status(200).json(users);
};

module.exports = { getUsers };
