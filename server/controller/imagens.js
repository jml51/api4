const imageModel = require("../data/models/imagens");
const apiResponse = require("../utils/apiResponse.js");
const multer = require("multer");
const path = require("path");

exports.getAll = async (req, res) => {
  const image = await imageModel.findAll();

  if (image) {
    //cenario de sucesso
    return res.json({ success: true, data: image });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.updateBYId = async (req, res) => {
  const { ID_imagens, resposta } = req.body;
  const images = await imageModel.findByPk(ID_imagens);

  images.resposta = resposta;

  const updateRes = await images.save();
  if (updateRes) {
    //cenario de sucesso
    return res.json({ success: true, data: images });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.addProduct = async (req, res) => {
  const imagem = req.file.path;

  const projeto = await imageModel.create({ imagem });
  res.status(200).send("Imagem: " + projeto.imagem + "  guardada");
  console.log(projeto);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.fieldname + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  /*
    fileFilter: (req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png|gif/
        const minType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(minType && extname){
            return cb(null, true)
        }
        cb('ERROR')
    }
    */
}).single("imagem");
