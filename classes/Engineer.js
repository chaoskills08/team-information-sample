const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'engineer')
    this.officeNumber = officeNumber
  }
}

module.exports = Engineer