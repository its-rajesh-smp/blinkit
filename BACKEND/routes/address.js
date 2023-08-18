const router = require("express").Router();
const addressController = require("../controllers/address");
const authentication = require("../middleware/authentication");

router.post("/address/create", authentication, addressController.create);
router.get("/address", authentication, addressController.getAll);
router.patch("/address/:id", authentication, addressController.edit);
router.delete("/address/:id", authentication, addressController.delete);

module.exports = router;
