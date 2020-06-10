const connection = require('../DB/conexao');

module.exports = {
     async create(request, response) {
        const { email, senha } = request.body;
        
        const user = await connection('usuarios').where({email: email, senha: senha}).select('nome', 'id').first();
        console.log({email, senha})

    if (!user) {
        return response.status(400).json({ error: 'Nenhum usuario encontrado'});
    }
        return response.json(user);
    }
};