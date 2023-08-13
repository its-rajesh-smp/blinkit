const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../utils/database");

const MainCategory = sequelize.define("mainCategory", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
  },
  name: { type: STRING, allowNull: true },
  image: { type: STRING, allowNull: false },
});

module.exports = MainCategory;
