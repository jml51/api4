const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
//const Router = require ("express");

require('dotenv').config();

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
    origin: "http://127.0.0.1:3000",
};



app.use(cors(corsOptions));

// output dados de pedido HTTP
app.use(morgan("short"));

// parse dados dos pedidos no content-type - application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// envia uma mensagem de erro caso a o pedido nao funcione
app.use((req, res) =>{
    res.status(404).send('Page Not Found');
});



//ROUTES VÃO SER COLOCADOS AQUI!
const router2 = require('./routes');
app.use("/api",router2);

//Fazer ligação à Base de Dados
const database = require('./data/context/databasa');



// correr server no url host:port definido em .env
//mostra uma mensagem no terminal a dizer que o server esta acorrer
//em conjunto com umlink prar abrir o server com os dados d .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(
        "Server up running at http://%s:%s",
        process.env.SERVER_HOST,
        process.env.SERVER_PORT,
    );
});







































