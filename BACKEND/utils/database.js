const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || "blinkit",
  process.env.POSTGRES_USER || "postgres",
  process.env.POSTGRES_PASSWORD || "postgres",
  {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT || 5432),
    logging: false,
  }
);

module.exports = sequelize;
