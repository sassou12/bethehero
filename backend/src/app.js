const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(cors());
/**
 * Middleware para que o express aceite JSON no corpo da requisição
 */
app.use(express.json());
/**
 * Middleware das rotas da aplicação
 */
app.use(routes);
/**
 * Middleware de valição (celebrate/Joi)
 */
app.use(errors());

module.exports = app;