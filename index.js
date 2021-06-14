var express = require('express');

var socket = require('socket.io')

// App setup
var app = express();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});

app.use(express.static('public'))
// Static files
var io = socket(server)
io.on('connection', (socket) => {
    console.log('server connected')
    socket.on('name', (data) => {
        console.log('hai mwonu')
        io.sockets.emit('message', { name: data.handle, message: data.message })
    })
    socket.on('typing', (data) => {
        count++;

        console.log(data)
        if (count == 1) {
            socket.broadcast.emit('typing', data)
        }
    })

})
