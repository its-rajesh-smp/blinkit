const router = require("express").Router();
const carouselAdController = require("../controllers/carousel-ad");

router.get("/carousel-ad", carouselAdController.get);
router.post("/carousel-ad/create", carouselAdController.create);

module.exports = router;
