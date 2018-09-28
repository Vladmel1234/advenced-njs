const EventEmitter = require('events')

class TaskManager extends EventEmitter {
  constructor (client) {
    super()
    this.tasks = {}
    this.taskId = 1
    process.nextTick(() => {
      this.emit('response', 'Please type command (help for the command list)')
    })
    client.on('command', (command, args) => {
      console.log(`command: ${args}`)
      switch (command) {
      case 'ls':
      case 'add':
      case 'help':
      case 'delete':
        this[command](args)
        break
      default:
        this.emit('response', 'Unknown command... ')
        break
      }
    })
  }

  tasksString () {
    return Object.keys(this.tasks).map(key => {
      return `${key}: ${this.tasks[key]}`
    }).join('\n')
  }

  help () {
    this.emit('response', `Available Commands:
  add task
  ls
  delete :id`
    )
  }
  add (args) {
    this.tasks[this.taskId] = args.join(' ')
    this.emit('response', `Added task ${this.taskId}`)
    this.taskId++
  }
  ls () {
    this.emit('response', `Tasks:\n${this.tasksString()}`)
  }
  delete (args) {
    delete (this.tasks[args[0]])
    this.emit('response', `Deleted task ${args[0]}`)
  }
}

module.exports = (client) => new TaskManager(client)
