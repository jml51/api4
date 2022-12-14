const registModel = require("../data/models/regist");
const bd = require("../data/context/databasa")
var bcrypt = require('bcryptjs');

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
  const { email_U, nome_U, pass, ID_anotador } = req.body;

  const anotadores = await registModel.create({ email_U, nome_U, pass, ID_anotador });

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
    const { email_U, nome_U, pass, ID_anotador } = req.body;
    const anotadores = await registModel.findByPk(email_U);

    anotadores.nome_U = nome_U;
    anotadores.pass = pass;
    anotadores.ID_anotador = ID_anotador;

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
  const { email_U } = req.body;

  await registModel.destroy({
    where: { email_U },
  });
  return res.json({ success: true });
};

exports.register = async (req,res) => {

    //check existeing users
    const q =  "SELECT * FROM anotadores WHERE email_U = ?? or pass = ??  or nome_U = ??";
     
    bd.query(q,[req.body.email_U, req.body.pass, req.body.nome_U], (err,data) =>{
  if(err)  return res.json(err)
  if(data.length) return res.status(409).json("usuaria ja ixiste");

  //hash password and creat a user
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.pass, salt);

  const q = "INSERT INTO anotadores ('email_U','pass','nome_U') VALUES (?, ?, ?)";
  const VALUES = [req.body.email_U, hash, req.body.nome_U];

  bd.query(q,[VALUES], (err,data)=>{
    if(err)  return res.json(err);
    return res.status(200).json("usuario criado");
  })
});

}
