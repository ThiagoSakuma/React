
const express = require('express');
const routes = require('./routes'); /*arquivo*/
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetro nomeados enviados na rota após "?" serve p/ filtros, paginação
 * Route Params: Parâmetro utilizado p/ identificar recursos
 * Request Body: Corpo da requisição, utilizado p/ criar ou alterar recursos
*/