const projetoModel = require("../data/models/projeto");

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
  const titulo = req.params.id;
  const projeto = await projetoModel.findByPk(titulo);

  if (projeto) {
    //cenario de sucesso
    return res.json({ success: true, data: projeto });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.create = async (req, res) => {
  const { titulo, regras,  descriçao,imagem} = req.body;

  const projeto = await projetoModel.create({ titulo,descriçao,regras, imagem });

  if (projeto) {
    //cenario de sucesso
    return res.json({ success: true, data: projeto });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
    const { titulo, regras,  descriçao , imagem } = req.body;
    const projeto = await projetoModel.findByPk(titulo);

    projeto.titulo = titulo;
    projeto.descriçao = descriçao;
    projeto.imagem = imagem;
    projeto.regras = regras;


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
  const { titulo } = req.body;

  await projetoModel.destroy({
    where: { id },
  });
  return res.json({ success: true });
};
