const router = require("express").Router();
const registModel = require("./regist");
const projetoModel = require("./projeto");
const { get } = require("./regist");
const cookieParser = require("cookie-parser");


router.use("/regist", registModel);
router.use("/projeto", projetoModel);


module.exports = router;

