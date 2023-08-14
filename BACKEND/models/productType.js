const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../utils/database");

const ProductType = sequelize.define("producttype", {
  id: {
    allowNull: false,
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  price: {
    allowNull: false,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  discount: {
    defaultValue: 0,
    type: INTEGER,
  },
});

module.exports = ProductType;
