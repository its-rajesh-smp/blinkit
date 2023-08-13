const Carousel_ad = require("../models/carousel-ad");
exports.get = async (req, res) => {
  try {
    const dbRes = await Carousel_ad.findAll();
    res.send(dbRes);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
exports.create = async (req, res) => {
  try {
    const { image, path } = req.body;
    const dbRes = await Carousel_ad.create({ image, path });
    res.send(dbRes);
  } catch (error) {
    res.status(402).send(error.message);
  }
};
