// Importar o express
const express = require("express");

const ContatosControllers = require("../controllers/ContatosContollers")

// Cria o roteador
const router = express.Router();

// Pede para o roteador definir uma rota: (método: get, endereço: /contatos)
router.get("/contatos", ContatosControllers.listarContatos);
router.get("/contatos/:id", ContatosControllers.CapturarContato);

// Exportar o roteador
module.exports = router