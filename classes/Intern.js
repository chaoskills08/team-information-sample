const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'intern')
    this.officeNumber = officeNumber
  }
}

module.exports = Intern