const projetoModel = require("express").Router();
const controller = require("../controller/projeto");

projetoModel.get("/all", controller.getAll);
projetoModel.get("/id/:ID_projeto", controller.getById);
projetoModel.post("/create", controller.create);
projetoModel.put("/update", controller.update);
projetoModel.delete("/delete", controller.delete);

module.exports = projetoModel;
