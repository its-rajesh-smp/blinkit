const MainCategory = require("../models/mainCategory");
const Product = require("../models/product");
const ProductType = require("../models/productType");
const SubCategory = require("../models/subCategory");
exports.get = async (req, res) => {
  try {
    const { subCategory } = req.params;
    const dbRes = await Product.findAll({
      where: { subCategory },
      include: [
        ProductType,
        { model: MainCategory, attributes: ["id", "name"] },
        { model: SubCategory, attributes: ["id", "name"] },
      ],
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, description, images, category, subCategory } = req.body;
    const dbRes = await Product.create({
      name,
      description,
      images,
      category,
      subCategory,
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
