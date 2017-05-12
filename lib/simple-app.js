var runner = require('express-app-runner');
var path = require('path');

module.exports = function (currentDir) {

    var indexFilePath = path.join(currentDir, 'index.html');

    // Defines a index page to be provided by '/'
    runner.setIndexFile(indexFilePath);

    // Making the content of 'public' folder available for the app
    runner.setStaticDir(currentDir);

    // Runs the app
    runner.run();

}