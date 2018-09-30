const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  switch (req.url) {
  case '/home':
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Home \n')

    break

  default:
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Default  \n')
    break
  }
})

server.listen(4000, () => {
  console.log('server is listening on port: 4000 ')
})
