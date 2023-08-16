const router = require("express").Router();
const productController = require("../controllers/product");

router.get("/product/:mainCategory/:subCategory", productController.get);
router.get("/product/:mainCategory", productController.getByCategory);
router.post("/product/create", productController.create);

module.exports = router;
