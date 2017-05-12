var runner = require('express-app-runner');
var path = require('path');

var indexFilePath = path.join(__dirname, 'index.html');

// Defines a index page to be provided by '/'
runner.setIndexFile(indexFilePath);

// Making the content of 'public' folder available for the app
runner.setStaticDir(__dirname);

// Runs the app
runner.run();