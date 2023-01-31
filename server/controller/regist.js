const registModel = require("../data/models/regist");
var bcrypt = require("bcryptjs");
const {sign} = require("jsonwebtoken");


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

  const user = await registModel.findOne({where:{email_U: email_U} });
  if(!user){ 
     return res.json({success: false, error:"usuario nao existe"});
  }else{
    bcrypt.compare(pass, user.pass).then(async(match) => {
      if (!match){
       return res.json({success: false, error: "password errada" });
      }else{
        const accessToken = sign(
          {ID_anotador: user.ID_anotador, email_U: user.email_U},  'accessToken' );
          res.json(accessToken);
        }
      });
    }
};
