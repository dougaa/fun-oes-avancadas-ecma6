const EventEmitter = require('events')

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User Logged', data)
    }

}
const users = new Users()

users.on('user logged', data => {
    console.log(data)
})
Users.userLogged({ user: 'douglas'})
