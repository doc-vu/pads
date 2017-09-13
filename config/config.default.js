'use strict';

var config = require('./config.webgme'),
//var config = require('./config.base.js'),
    validateConfig = require('webgme/config/validator');


// config.client.log.level = 'info';


config.plugin.basePaths.push('src/common');
config.visualization.decoratorPaths.push('./src/decorators');



// Plugins
config.plugin.allowServerExecution = true;


// Seeds
config.seedProjects.enable = true;
config.seedProjects.basePaths = ["./seeds"]

// Icons
config.visualization.svgDirs = ['./icons/png'];



// Visualizer descriptors

// Add requirejs paths
config.requirejsPaths['pads_app'] = './src/common';
config.requirejsPaths['CreateTopology'] = './src/plugins/CreateTopology';

config.requirejsPaths['mrMininetTopo'] = './src/plugins/mrMininetTopo';





// Add/overwrite any additional settings here
// config.server.port = 8080;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';

config.server.port = 8877;
validateConfig(config);
module.exports = config;

