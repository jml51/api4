const registModel = require("../data/models/regist");
var bcrypt = require("bcryptjs");
const {sign} = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

exports.getAll = async (req, res) => {
  const anotadores = await registModel.findAll();

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const anotadores = await registModel.findByPk(id);

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.create = async (req, res) => {
  const { email_U, nome_U, pass } = req.body;

  const anotadores = await registModel.create({ email_U, nome_U, pass });

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
  const { email_U, nome_U, pass } = req.body;
  const anotadores = await registModel.findByPk(email_U);

  anotadores.nome_U = nome_U;
  anotadores.pass = pass;

  const updateRes = await anotadores.save();
  if (updateRes) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.delete = async (req, res) => {
  const { ID_anotador } = req.body;

  await registModel.destroy({
    where: { ID_anotador },
  });
  return res.json({ success: true });
};

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
  });

  const accessToken = sign(
    {ID_anotador: user.ID_anotador, email_U: user.email_U},  
    'jwtkey'
  );
  res.json(accessToken );
/*
  res.cookie("access_token", token, {
    httpOnly: true
  }).status(200).json(user) 
*/

};
