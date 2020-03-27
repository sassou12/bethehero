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
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', celebrate({
  [Segments.BODY]:Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.string().required().max(14).min(13),
    city: Joi.string().required(),
    uf: Joi.string().length(2).required(),
  })
}), OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    ong_id: Joi.string().required(),
  }).unknown(),
}) ,ProfileController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes;