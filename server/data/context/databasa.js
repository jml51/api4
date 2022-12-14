const Sequelize = require("sequelize");

const database = new Sequelize({
  host: "localhost",
  port: "3306",
  username: "jose",
  password: "8854",
  database: "psi_final",
  dialect: "mysql",
});

module.exports = database;
