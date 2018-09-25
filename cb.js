const syncLoop = (x, cb) => {
  process.nextTick(cb)
  return `${x}`
}

console.log(syncLoop(1, () => {
  for (let i = 0; i < 9999999999; i++) {}
}))
console.log(syncLoop(2, () => {
  for (let i = 0; i < 9999999999; i++) {}
}))
console.log(syncLoop(3, () => {
  for (let i = 0; i < 9999999999; i++) {}
}))

console.log('hey 1')
console.log('hey 2')
console.log('hey 3')
