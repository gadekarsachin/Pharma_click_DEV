const { Socket } = require('socket.io');
var cors = require('cors');

var app = require('express')();
var http = require('http').createServer(app);
// var io = require('socket.io')(http);

app.get('/', (req, res) => res.send('Hello, connected to server'));

app.use(cors());

var io = require("socket.io")(http, {
    cors: {
       origin: "*",
   }
 });

io.on('connection', (Socket) => {
    console.log(' user is connected');

    Socket.on('new-message', (message) => {
        console.log("first msg",message);
        io.emit(message);

        // Socket.emit(message);
        // Socket.broadcast.emit('message-broadcast', msg);
        // console.log("msg broad", msg);
      });

      Socket.on('disconnect', function () {
        console.log('A user disconnected');
     });
})

http.listen(3000, ()=> {
    console.log("Listening on: 3000")
})
// ------------------------------------

