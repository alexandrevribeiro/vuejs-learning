var runApp = function(indexFilePath, publicPath) {

    var express = require('express');    
    var open = require('open');

    var app = express();

    app.get('/', function(req, res) {
        res.sendFile(indexFilePath);
    });

    // Making the JS file (and also all others) available to the app
    app.use(express.static(publicPath));

    app.listen(3000, function(err) {
        console.log('Listening to port 3000');
        open('http://localhost:3000');
    });
}

module.exports = runApp;