const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuariosController');
const TotaisController = require('./controllers/TotaisController');
const LoginController = require('./controllers/LoginController');
const ProfileController = require('./controllers/ProfileController');

routes.post('/login', LoginController.create);//Verifica existencia de usuario no banco


routes.get('/totais', TotaisController.listar); //lista todos os totais
routes.post('/totais', TotaisController.create);//insere totais no banco


routes.post('/usuarios', UsuarioController.create);//insere usuarios no banco


routes.get('/profile', ProfileController.index);//lista totais por usuario logado

module.exports = routes;