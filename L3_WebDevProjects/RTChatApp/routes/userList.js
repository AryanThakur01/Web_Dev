const express = require("express");
const router = express.Router();

const { getUsers } = require("../controller/userList");

router.route("/getUsers").get(getUsers);

module.exports = router;
