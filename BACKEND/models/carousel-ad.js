const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../utils/database");

const Carousel_ad = sequelize.define("carousel_ad", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
  },
  path: { type: STRING, allowNull: true },
  image: { type: STRING, allowNull: false },
});

module.exports = Carousel_ad;
