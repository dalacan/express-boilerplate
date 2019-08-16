var http = require('http');
var express = require('express');

var indexRouter = require('./routes/index');
var statusRouter = require('./routes/status');

var app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/status', statusRouter);

var server = http.createServer(app);
var port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

module.exports = app; // for testing