const connection = require('../DB/conexao');

module.exports = {
     async index (request, response) {
        const usuarios_id = request.headers.authorization;

        const totais= await connection ('totais').where('usuarios_id', usuarios_id).select('*');

        return response.json(totais);
    }
};