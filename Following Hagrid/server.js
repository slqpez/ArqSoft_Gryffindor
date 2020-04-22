var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

//traemos la posicion del conductor y se la enviamos al administrador
io.on('connection',(socket)=>{
    console.log('se ha conectado un marica conductor');
    socket.on('posicion',infoPosicion =>{
        socket.broadcast.emit('nuevaPosicion',infoPosicion);
    });
});

server.listen(4000,function(){
    console.log('corriendo');
});