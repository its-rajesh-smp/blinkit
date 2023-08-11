const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("blinkit", "root", process.env.PASSWORD, {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = sequelize;
