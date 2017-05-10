var runApp = require('../../lib/generic-app');
var path = require('path');

var indexPath = path.join(__dirname, 'index.html');
var publicPath = __dirname;

runApp(indexPath, publicPath);