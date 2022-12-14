const Sequelize = require("sequelize");
const database = require("../context/databasa");

const registModel = database.define("anotadores", {
  ID_anotador: {
    type: Sequelize.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true
  },
  nome_U: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email_U: {
    type: Sequelize.STRING ,
    allowNull: true,
  },
});

module.exports = registModel;


