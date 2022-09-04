const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, user) {
    super(name, id, email, 'engineer')
    this.user = user
  }

  getPos() {
    return "Engineer"
}

  getUser() {
    return this.user
  }
}

module.exports = Engineer