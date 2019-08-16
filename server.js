var http = require('http');
var express = require('express');

var statusRouter = require('./routes/status');

var app = express();

app.use(express.json());

app.use('/status', statusRouter);

app.use('/', function(req, res) {
    res.send('hello world');
});

var server = http.createServer(app);
var port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

module.exports = app; // for testing