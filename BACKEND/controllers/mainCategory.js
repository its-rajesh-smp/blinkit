const MainCategory = require("../models/mainCategory");
const SubCategory = require("../models/subCategory");

exports.get = async (req, res) => {
  try {
    const dbRes = await MainCategory.findAll({
      include: [{ model: SubCategory, attributes: ['id'], order: [['id', "ASC"]], limit: 1 }]
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, image } = req.body;
    const dbRes = await MainCategory.create({ name, image });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
