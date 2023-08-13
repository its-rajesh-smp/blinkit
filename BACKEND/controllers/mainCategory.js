const MainCategory = require("../models/mainCategory");

exports.get = async (req, res) => {
  try {
    const dbRes = await MainCategory.findAll();
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
