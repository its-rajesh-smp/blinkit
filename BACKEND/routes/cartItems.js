const router = require("express").Router();
const cartController = require("../controllers/cartItems");
const authentication = require("../middleware/authentication");

router.post("/cart/add", authentication, cartController.add);
router.post("/cart/update", authentication, cartController.update);
router.delete("/cart/:producttypeId", authentication, cartController.delete);
// router.get("/cart/get/:userEmail", cartController.get);

module.exports = router;
