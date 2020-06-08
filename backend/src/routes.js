const express = require('express');
const SessionController = require('./controllers/SessionController');
const AssetsController = require('./controllers/AssetsController');
const LiabilitiesController = require('./controllers/LiabilitiesController');
const routes = express.Router();

/** ROUTES */
routes.post('/sessions', SessionController.store);
routes.post('/assets', AssetsController.store);
routes.post('/liabilities', LiabilitiesController.store);

/** MODULE EXPORT */
module.exports = routes;