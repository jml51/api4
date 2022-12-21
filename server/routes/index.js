const router = require("express").Router();
const { get } = require("./regist");
const cookieParser = require("cookie-parser");

const registModel = require("./regist");
router.use("/regist", registModel);

const projetoModel = require("./projeto");
router.use("/projeto", projetoModel);


module.exports = router;

