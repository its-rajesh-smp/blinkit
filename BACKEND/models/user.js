const { STRING } = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  email: { allowNull: false, type: STRING, unique: true, primaryKey: true },
  password: { allowNull: false, type: STRING },
});

module.exports = User;
