const router = require("express").Router();
const {
  registerUser,
  authUser,
  allUsers,
  removeUser,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(authUser);
router.route("/remove/").delete(protect, removeUser);

module.exports = router;
