const Sequelize = require("sequelize");
const database = require("../context/databasa");

const projetoModel = database.define("projeto", {
  ID_projeto: {
    type: Sequelize.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true
  },
  descriçao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  regras: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  titulo: {
    type: Sequelize.STRING ,
    allowNull: true,
  },
});

module.exports = projetoModel;