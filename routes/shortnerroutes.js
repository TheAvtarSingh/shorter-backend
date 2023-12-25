const express = require('express');

const Router = express.Router();
const {storeUrl} = require('./methods');


Router.post('/shortner',storeUrl);

module.exports = Router;