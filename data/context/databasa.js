const Sequelize = require("sequelize");

const pool = new Sequelize({
  host: "localhost",
  port: "5000",
  user: "root",
  password: "root",
  database: "PSI_final",
  dialect: "mysql",
});

module.exports = pool;
