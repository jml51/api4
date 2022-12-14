const registModel = require("../data/models/projeto");

exports.getAll = async (req, res) => {
  const projeto = await projetoModel.findAll();

  if (projeto) {
		//cenario de sucesso
		return res.json({ success: true, data: projeto });
	} else {
		//cenario de erro
		return res.json({ success: false });
	}
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const projeto = await projetoModel.findByPk(id);

  if (projeto) {
    //cenario de sucesso
    return res.json({ success: true, data: projeto });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.create = async (req, res) => {
  const { email_U, nome_U, pass, ID_anotador } = req.body;

  const projeto = await projetoModel.create({ email_U, nome_U, pass, ID_anotador });

  if (projeto) {
    //cenario de sucesso
    return res.json({ success: true, data: projeto });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
    const { email_U, nome_U, pass, ID_anotador } = req.body;
    const projeto = await projetoModel.findByPk(email_U);

    projeto.nome_U = nome_U;
    projeto.pass = pass;
    projeto.ID_anotador = ID_anotador;

    const updateRes = await projeto.save();
    if (updateRes) {
      //cenario de sucesso
      return res.json({ success: true, data: projeto });
    } else {
      //cenario de erro
      return res.json({ success: false });
    }
};

exports.delete = async (req, res) => {
  const { email_U } = req.body;

  await projetoModel.destroy({
    where: { id },
  });
  return res.json({ success: true });
};
