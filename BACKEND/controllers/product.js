const { Op } = require("sequelize");
const MainCategory = require("../models/mainCategory");
const Product = require("../models/product");
const ProductType = require("../models/productType");
const SubCategory = require("../models/subCategory");
exports.get = async (req, res) => {
  try {
    const { subCategory, mainCategory } = req.params;
    const dbRes = await Product.findAll({
      where: { subCategory, category: mainCategory },
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
    const { name, description, images, category, subcategory } = req.body;
    const dbRes = await Product.create({
      name,
      description,
      images,
      category,
      subcategory,
    });

    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getByCategory = async (req, res) => {
  try {
    const { mainCategory } = req.params;

    const dbRes = await Product.findAll({
      where: { category: mainCategory },
      include: [ProductType],
    });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const { productId } = req.params;
    const dbRes = await Product.findOne({
      where: { id: productId },
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



exports.search = async (req, res) => {
  try {
    const { searchParam } = req.params
    const dbRes = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${searchParam}%`
        }
      },
      include: [
        ProductType,
        { model: MainCategory, attributes: ["id", "name"] },
        { model: SubCategory, attributes: ["id", "name"] },
      ],
    });

    res.send(dbRes)

  } catch (error) {
    res.status(404).send(error.message);
  }
}