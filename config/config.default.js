'use strict';

// var config = require('./config.webgme'),
var config = require('./config.base.js'),
    validateConfig = require('webgme/config/validator');


// config.client.log.level = 'info';




// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

config.server.port = 8877;
validateConfig(config);
module.exports = config;

