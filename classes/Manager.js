const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'manager')
    this.officeNumber = officeNumber
  }
}

const test = new Manager('Nick', 8, 'test@email.com', 34)
// console.log(test)

module.exports = Manager;