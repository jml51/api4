const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

//const Router = require ("express");

require("dotenv").config();

//--REST SERVER--//
const app = express();

//--ROUTES--//
//const router = Router();
// GET nome method route
//router.get("/nome", (req, res) => {
//  res.send(data.nome);
//});

// Live Server CORS options
// aqui é o link do site a correr com o live server
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// output dados de pedido HTTP
app.use(morgan("short"));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//ROUTES VÃO SER COLOCADOS AQUI!
const router = require("./routes");
app.use("/api", router);

//Fazer ligação à Base de Dados
const database = require("./data/context/databasa");

var fs = require("fs");

var dir = path.join(__dirname, "public");

var mime = {
  html: "text/html",
  txt: "text/plain",
  css: "text/css",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  js: "application/javascript",
};

app.get("*", function (req, res) {
  const defaultDIR = dir.replace("\\public", "");
  var file = path.join(defaultDIR, req.path.replace(/\/$/, "/index.html"));
  if (file.indexOf(defaultDIR + path.sep) !== 0) {
    return res.status(403).end("Forbidden");
  }
  var type = mime[path.extname(file).slice(1)] || "text/plain";
  var s = fs.createReadStream(file);
  s.on("open", function () {
    res.set("Content-Type", type);
    s.pipe(res);
  });
  s.on("error", function () {
    res.set("Content-Type", "text/plain");
    res.status(404).end("Not found");
  });
});

try {
  database.sync({ force: true, alter: true });
} catch (error) {
  console.info(error);
}

// envia uma mensagem de erro caso a o pedido nao funcione
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// correr server no url host:port definido em .env
//mostra uma mensagem no terminal a dizer que o server esta acorrer
//em conjunto com umlink prar abrir o server com os dados d .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
