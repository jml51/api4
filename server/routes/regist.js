const registModel = require("express").Router();
const controller = require("../controller/regist");

registModel.get("/", controller.getAll);
registModel.get("/:id", controller.getById);
registModel.post("/create", controller.create);
registModel.post("/register", controller.register);
registModel.post("/login", controller.login);
registModel.put("/update", controller.update);
registModel.delete("/delete", controller.delete);


module.exports = registModel;
