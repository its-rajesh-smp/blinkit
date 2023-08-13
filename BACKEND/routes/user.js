const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/user/signUp", userController.signUp);
router.post("/user/logIn", userController.logIn);
router.post("/user", userController.get);
router.post("/user/update", userController.update);

module.exports = router;
