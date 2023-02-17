const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");

const router = require("express").Router();

router.route("/").post(sendMessage);
router.route("/:chatId").get(allMessages);

module.exports = router;
