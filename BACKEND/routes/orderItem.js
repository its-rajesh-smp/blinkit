const router = require("express").Router();
const orderItemController = require("../controllers/orderItem");
const authentication = require("../middleware/authentication");

router.post("/order/create", authentication, orderItemController.createOrder);
router.post(
  "/order/orderSuccess",
  authentication,
  orderItemController.onPaymentSuccess
);
router.post(
  "/order/orderFailed",
  authentication,
  orderItemController.onPaymentFailed
);
router.get("/order", orderItemController.getAll);

module.exports = router;
