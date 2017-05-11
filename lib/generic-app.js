var express = require('express');
var open = require('open');

var app = express();

var runApp = function(indexFilePath, staticDirPath, port) {    

    if (!port)
        port = 3000;

    if (indexFilePath) {
        app.get('/', function(req, res) {
            res.sendFile(indexFilePath);
        });
    }

    // Making the JS file (and also all others) available to the app
    if (staticDirPath)
        app.use(express.static(staticDirPath));

    app.listen(port, function(err) {
        console.log('Listening to port ' + port + '...');
        open('http://localhost:' + port);
    });

    return app;
}

module.exports = runApp;