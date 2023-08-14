const router = require("express").Router();
const subCategoryControlelr = require("../controllers/subCategory");

router.get("/subCategory/:category", subCategoryControlelr.get);
router.post("/subCategory/create", subCategoryControlelr.create);

module.exports = router;
