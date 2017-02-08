/* jshint node: true */
'use strict';
var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');
  var   path = require('path');

// Authentication
config.authentication.enable = true;
config.authentication.allowGuests = false;
config.authentication.guestAccount = 'guest';
config.authentication.allowUserRegistration = true;
//config.authentication.logOutUrl = '/login';
config.authentication.jwt.privateKey = path.join(__dirname, '..','token_keys', 'private_key');
config.authentication.jwt.publicKey = path.join(__dirname, '..', 'token_keys', 'public_key');
config.authentication.allowUserRegistration = true;

// Authentication
//  config.authentication.logInUrl = '/profile/login';
//  config.authentication.logOutUrl = '/profile/login';

// Plugins
config.plugin.allowServerExecution = true;


// Seeds
config.seedProjects.enable = true;
config.seedProjects.basePaths = ["./seeds"]

// Icons
config.visualization.svgDirs = ['./icons/png'];



validateConfig(config);
module.exports = config;