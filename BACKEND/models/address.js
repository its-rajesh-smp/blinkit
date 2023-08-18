const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../utils/database");

const Address = sequelize.define("address", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: INTEGER,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  addressPosition: {
    type: STRING,
  },
});

module.exports = Address;
