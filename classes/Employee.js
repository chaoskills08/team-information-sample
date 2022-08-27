class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
  }
}

const test = new Employee('Nick', 8, 'test@email.com', 'Employee')
// console.log(test)

module.exports = Employee;