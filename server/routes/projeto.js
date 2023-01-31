const projetoModel = require("express").Router();
const controller = require("../controller/projeto");

projetoModel.get("/all", controller.getAll);
projetoModel.get("/id/:ID_projeto", controller.getById);
projetoModel.post("/create", controller.create);
projetoModel.put("/update", controller.updateBYId);
projetoModel.delete("/delete/:ID_projeto", controller.deleteById);
 

module.exports = projetoModel;
