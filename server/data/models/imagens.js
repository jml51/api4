
const Sequelize = require("sequelize");
const database = require("../context/databasa");

const imageModel = database.define("imagem", {
  ID_imagens: {
    type: Sequelize.INTEGER,
    allowNull: true,
    autoIncrement: true,
    primaryKey: true
  },
  imagem:{
    type: Sequelize.STRING
  },
  resposta:{
    type: Sequelize.STRING
  }
});

module.exports = imageModel;
