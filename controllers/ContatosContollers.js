// Para testes, assumindo que o usuario logado é o usuario de id=1;
const uid = 1;

module.exports = {
    listarContatos: (req, res)=> {
        
        // importando os contatos de usuario
        let contatos = require(`../database/contatos_${uid}.json`);

        // Enviando os contatos para o cliente
        res.render("home.ejs");
    },

    CapturarContato: (req, res) => {}
};