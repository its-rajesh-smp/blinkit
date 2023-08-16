const { INTEGER } = require("sequelize");
const sequelize = require("../utils/database");

const CartItem = sequelize.define("cartItem", {
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: { type: INTEGER, allowNull: false },
});

module.exports = CartItem;
