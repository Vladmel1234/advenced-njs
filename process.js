process.on('exit', (code) => {
  console.log('-------------------------')
  console.log(`About to exit with this code ${code}`)
  console.log('-------------------------')
})

// handler for unchauchExeption
process.on('uncaughtException', (err) => {
  console.log('cought it ')
  console.error(err)

  process.exit(1)
})

// keep event loop busy
process.stdin.resume()

console.log(z)
