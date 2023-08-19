const { STRING } = require("sequelize");
const sequelize = require("../utils/database");

const Payment = sequelize.define("payment", {
  orderId: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: STRING,
    allowNull: false,
    defaultValue: "PENDING",
  },
  paymentId: {
    unique: true,
    type: STRING,
    allowNull: true,
  },
});

module.exports = Payment;
