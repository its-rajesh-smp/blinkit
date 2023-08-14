const SubCategory = require("../models/subCategory");

exports.get = async (req, res) => {
  try {
    const { category } = req.params;
    const dbRes = await SubCategory.findAll({ where: { category } });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, image, category } = req.body;
    const dbRes = await SubCategory.create({ name, image, category });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
