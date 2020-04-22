var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection',(socket)=>{
    console.log('se ha conectado un marica conductor');
    socket.on('position',position =>{
        socket.broadcast.emit('newPosition',position);
    });
});

server.listen(4000,function(){
    console.log('corriendo');
});