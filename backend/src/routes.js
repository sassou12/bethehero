/**
 * Tipos de parametros
 * 
 * Query Params: parametro enviados após a '?' no fim do endereco
 * são acessados através da coleção(chave,valor) 'query' da requisição
 * 
 * Route Params: parametro enviados após uma '/' em um endereco
 * são acessados através da coleção(chave,valor) 'params' da requisição
 * 
 * Route Params: parametro enviados no corpo da requisição no formato JSON
 * são acessados através do campo 'body' da requisição
 * 
 */
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;