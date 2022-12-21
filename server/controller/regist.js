const registModel = require("../data/models/regist");
var bcrypt = require("bcryptjs");
const {sign} = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



exports.register = async (req, res) => {
  const { email_U, nome_U, pass } = req.body;
  /*
    const listOfUsers = await registModel.findAll({
      where: {
        nome_U: nome_U,
        pass: pass,
        email_U: email_U,
      },
    });

    if (listOfUsers ){
      return res.status(500).json({
        message: "Nome ,pass ou email ja estao a ser utilizados",
      });
    }else{
      return res.status(404).json({
        message: "Nome ,pass ou email nao existem ",
      });
    }
  */
  bcrypt.hash(pass, 10).then((hash) => {
    registModel.create({
      nome_U: nome_U,
      pass: hash,
      email_U: email_U,
    });
    res.json("succeess");
  });
};

exports.login = async (req, res) => {
  const { email_U, pass } = req.body;

  const user = await registModel.findOne({
    where:{
    email_U: email_U,
    }
  });

  if(!user) res.json({error:"usuario nao existe"});

  bcrypt.compare(pass, user.pass).then(async(match) => {
    if (!match) res.json({ error: "password errada" });
  

  const accessToken = sign(
    {ID_anotador: user.ID_anotador, email_U: user.email_U},  'accessToken' );
  res.json(accessToken);

  });
};
