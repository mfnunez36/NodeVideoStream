var express = require('express');
var app = new express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var Log = require('log'),
log = new Log('debug')


var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.redirect('index.html');
});

io.on('connection', function(socket){
    socket.on('stream', function(img){
        socket.broadcast.emit('stream', img);
    });
});

io.on('connection', function(socket){
    socket.on('streampa', function(img){
        socket.broadcast.emit('streampa', img);
    });
});

http.listen(port, function(){
    console.log('Server puerto %s', port);
});