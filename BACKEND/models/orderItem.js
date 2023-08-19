const { INTEGER, STRING, INET } = require("sequelize");
const sequelize = require("../utils/database.js");

const OrderItem = sequelize.define("orderItem", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: INTEGER,
    autoIncrement: true,
  },
  deliveryName: {
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
  quantity: {
    type: INTEGER,
  },
});

module.exports = OrderItem;
