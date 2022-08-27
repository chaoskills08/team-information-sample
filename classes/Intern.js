const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, 'intern')
    this.officeNumber = officeNumber
  }
}

const test = new Intern('Matt', 18, 'matt@gmail.com', 29) 
console.log(test)

module.exports = Intern