var express = require('express');
var path = require('path');
var open = require('open');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Making the JS file (and also all others) available to the app
app.use(express.static(__dirname));

app.listen(3000, function(err) {
    console.log('Listening to port 3000');
    open('http://localhost:3000');
});