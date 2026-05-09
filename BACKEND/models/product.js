const { INTEGER, STRING, TEXT } = require("sequelize");
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
    type: TEXT,
  },
  images: {
    allowNull: false,
    type: TEXT,
  },
});

module.exports = Product;
