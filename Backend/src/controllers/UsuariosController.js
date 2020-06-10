const crypto = require('crypto');
const connect = require('../DB/conexao');

module.exports = {

    async listar(request, response) {
        const usuarios_id = request.headers.authorization;
        
        const totais = await connect('totais').where('id', usuarios_id).select('*');

        return response.json(totais);
    },

    async create(request, response) {
        const {nome, email, senha} = request.body;
        const id = crypto.randomBytes(2).toString('HEX');

        await connect('usuarios').insert({
            id,
            nome,
            email,
            senha,
        })

        return response.json({email, senha});
    },

}