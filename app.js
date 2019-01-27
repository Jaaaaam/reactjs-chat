const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4000

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
let roomNo = 1;
io.on('connection', socket => {
  console.log('User connected')
  console.log(socket.id, 'socket')
  console.log(io.sockets.adapter.rooms['room-'+roomNo], 'ADAPTER')
  // const clientNumber = io.sockets.adapter.rooms['room-'+roomNo].length

  if (io.nsps['/'].adapter.rooms["room-"+roomNo] && io.nsps['/'].adapter.rooms["room-"+roomNo].length >  1) roomNo++

  socket.join('room-'+roomNo)

  io.sockets.in('room-'+roomNo).emit('connectToRoom', `You are now connected to ${'room-'+roomNo}. You're ID is ${socket.id}`)
  io.emit('get-id', socket.id)
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    console.log(socket.id, 'socket')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))