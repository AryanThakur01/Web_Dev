const router = require("express").Router();

const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

router.route("/").post(accessChat);
router.route("/").get(fetchChats);
router.route("/group").post(createGroupChat);
router.route("/rename").put(renameGroup);
router.route("/groupadd").put(addToGroup);
router.route("/groupremove").put(removeFromGroup);

module.exports = router;
