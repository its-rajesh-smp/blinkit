const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/signUp", userController.signUp);
router.post("/logIn", userController.logIn);
router.post("/get", userController.get);
router.post("/update", userController.update);

module.exports = router;
