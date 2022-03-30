// Importar o express
const express = require("express");

// importar o roteadores
const ContatosRouter = require("./routes/ContatosRouters");
const UsuariosRouter = require("./routes/UsuariosRouter");

// Criar um servidor/aplicação com o express
const app = express();

app.set('view engine', 'ejs');


// Criar rota get no endereço '/' para responder requisição com msg "olá"
app.get("/",(req, res)=> {
    res.send("olá")
});

// Usando os Roteadores
app.use("/", ContatosRouter);
app.use("/", UsuariosRouter);

// Levantar/rodar/executar a nossa aplicação
app.listen(3000, ()=> {console.log("Aplicação escutando na porta 3000")})
