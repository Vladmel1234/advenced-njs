const fs = require('fs')
const server = require('https').createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
})

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.end('Holla \n')
})

server.listen(433, () => {
  console.log('server is listening on port: 433')
})

const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')
const https = require('http')

const req = https.get('http://www.fxempire.com', (res) => {
  console.log(res.headers)
  res.on('data', (data) => {
    console.log('-------------------------')
    console.log('data -->', decoder.write(data))
    console.log('-------------------------')
  })
})

req.on('error', (e) => {
  console.log(e)
})
