const registModel = require("express").Router();
const controller = require("../controller/regist");



registModel.post("/register", controller.register);
registModel.post("/login", controller.login);




module.exports = registModel;
