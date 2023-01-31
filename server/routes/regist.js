const registModel = require("express").Router();
const controller = require("../controller/regist");


registModel.put("/update", controller.update);
registModel.post("/register", controller.register);
registModel.post("/login", controller.login);




module.exports = registModel;
