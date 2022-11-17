const router = require("express").Router();

const registModel = require("./regist");
router.use("/regist", registModel);

router.get("/", (req, res) => {
  res.send("welcome /api!");
});

module.exports = router;

