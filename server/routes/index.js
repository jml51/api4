const router = require("express").Router();
const { get } = require("./regist");


const registModel = require("./regist");
router.use("/regist", registModel);

const projetoModel = require("./projeto");
router.use("/projeto", projetoModel);


const imageModel = require("./imagens");
router.use("/imagens", imageModel);


module.exports = router;

