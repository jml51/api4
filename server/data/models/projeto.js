const Sequelize = require("sequelize");
const database = require("../context/databasa");

const projetoModel = database.define("projeto", {
  email_U: {
    type: Sequelize.STRING,
    allowNull: true,
    primaryKey: true
  },
  nome_U: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  pass: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ID_anotador: {
    type: Sequelize.INTEGER ,
    allowNull: false,
  },
});

module.exports = projetoModel;