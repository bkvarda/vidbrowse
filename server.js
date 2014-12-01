var express = require('express');
var http = require('http');
var BinaryServer = require('binaryjs').BinaryServer
binaryServer = BinaryServer({port: 9000});

var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/views', express.static(__dirname + '/client/views'));

app.listen(1337, function(){

console.log('Listening on port 1337');

});