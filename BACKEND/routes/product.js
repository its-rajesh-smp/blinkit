const router = require("express").Router();
const productController = require("../controllers/product");

router.get("/product/:subCategory", productController.get);
router.post("/product/create", productController.create);

module.exports = router;
