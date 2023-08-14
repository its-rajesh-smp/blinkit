const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../utils/database");

const SubCategory = sequelize.define("subCategory", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
  },
  name: { type: STRING, allowNull: true },
  image: { type: STRING, allowNull: false },
});

module.exports = SubCategory;
