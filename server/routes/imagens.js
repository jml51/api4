const imageModel = require("express").Router();
const controller = require("../controller/imagens");

imageModel.get("/all", controller.getAll);
imageModel.post("/create", controller.upload, controller.addProduct );
imageModel.put("/update", controller.updateBYId);

 
module.exports = imageModel;