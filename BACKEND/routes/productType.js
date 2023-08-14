const router = require("express").Router();
const productTypeController = require("../controllers/productType");

router.get("/productType/:productId", productTypeController.get);
router.post("/productType/create", productTypeController.create);

module.exports = router;
