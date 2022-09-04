const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, offNum) {
    super(name, id, email, 'Manager')
    this.offNum = offNum
  }

  getPos() {
    return "Manager"
  }

  getOffNum() {
    return this.offNum
  }
}

module.exports = Manager;