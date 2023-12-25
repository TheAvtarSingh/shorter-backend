const express = require('express');

const Router = express.Router();
const {storeUrl,testApi,redirectUrl} = require('./methods');

// Router.get('/',testApi);
Router.post('/shortner',storeUrl);
Router.get('/:id',redirectUrl);

module.exports = Router;