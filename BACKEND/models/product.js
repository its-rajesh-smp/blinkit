const { INTEGER, STRING, JSON } = require("sequelize");
const sequelize = require("../utils/database");

const Product = sequelize.define("product", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  description: {
    allowNull: false,
    type: STRING,
  },
  images: {
    allowNull: false,
    type: JSON,
  },
});

module.exports = Product;
