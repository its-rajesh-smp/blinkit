const MainCategory = require("../models/mainCategory");
const Product = require("../models/product");
const ProductType = require("../models/productType");
const SubCategory = require("../models/subCategory");

module.exports = () => {
  MainCategory.hasMany(SubCategory, { foreignKey: "category" });
  SubCategory.belongsTo(MainCategory, { foreignKey: "category" });

  MainCategory.hasMany(Product, { foreignKey: "category" });
  Product.belongsTo(MainCategory, { foreignKey: "category" });

  SubCategory.hasMany(Product, { foreignKey: "subcategory" });
  Product.belongsTo(SubCategory, { foreignKey: "subcategory" });

  Product.hasMany(ProductType, { foreignKey: "productId" });
  ProductType.belongsTo(Product, { foreignKey: "productId" });
};
