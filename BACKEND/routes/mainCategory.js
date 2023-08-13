const router = require("express").Router();
const mainCategoryControlelr = require("../controllers/mainCategory");

router.get("/mainCategory", mainCategoryControlelr.get);
router.post("/mainCategory/create", mainCategoryControlelr.create);

module.exports = router;
