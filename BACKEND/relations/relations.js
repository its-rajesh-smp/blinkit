const Address = require("../models/address");
const CartItem = require("../models/cartItems");
const MainCategory = require("../models/mainCategory");
const OrderItem = require("../models/orderItem");
const Payment = require("../models/payment");
const Product = require("../models/product");
const ProductType = require("../models/productType");
const SubCategory = require("../models/subCategory");
const User = require("../models/user");

module.exports = () => {
  MainCategory.hasMany(SubCategory, { foreignKey: "category" });
  SubCategory.belongsTo(MainCategory, { foreignKey: "category" });

  MainCategory.hasMany(Product, { foreignKey: "category" });
  Product.belongsTo(MainCategory, { foreignKey: "category" });

  SubCategory.hasMany(Product, { foreignKey: "subcategory" });
  Product.belongsTo(SubCategory, { foreignKey: "subcategory" });

  Product.hasMany(ProductType, { foreignKey: "productId" });
  ProductType.belongsTo(Product, { foreignKey: "productId" });

  User.hasMany(CartItem);
  CartItem.belongsTo(User);

  ProductType.hasMany(CartItem);
  CartItem.belongsTo(ProductType);

  User.hasMany(Address);
  Address.belongsTo(User);

  User.hasMany(OrderItem);
  OrderItem.belongsTo(User);
  OrderItem.belongsTo(ProductType);
  OrderItem.belongsTo(Product);

  User.hasMany(Payment);
  Payment.belongsTo(User);

  Payment.hasMany(OrderItem);
  OrderItem.belongsTo(Payment);
};
