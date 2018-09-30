process.stdout.write('\u001B[2J\u001b[0;0f')
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')

const server = require('net').createServer()
let counter = 1
const sockets = {}

server.on('connection', socket => {
  socket.id = counter++
  socket.on('data', (data) => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim()
      sockets[socket.id] = socket
      return
    }
    Object.values(sockets).forEach((cs) => {
      if (cs.id !== socket.id) {
        cs.write(`${socket.name}:`)
        cs.write(decoder.write(data))
      }
    })
  })

  socket.on('end', () => {
    console.log(`socket number ${socket.id} disconnected`)
    delete sockets[socket.id]
  })
})

server.on('error', (err) => {
  console.log('error: ', err)
  process.exit(1)
})

server.listen(1234, () => {
  console.log('server listening on port 1234')
})
