const connect = require('../DB/conexao');

module.exports = {

    async listar(request, response) {
        const totais = await connect('totais').select('*');

        return response.json(totais);
    },

    async create (request, response) {
        const {total_proventos, total_desconto, total_liquido} = request.body;
        const usuarios_id = request.headers.authorization;

        const [id] = await connect('totais').insert({
            total_proventos,
            total_desconto,
            total_liquido,
            usuarios_id,
        });
        
        return response.json({id});
    }
}