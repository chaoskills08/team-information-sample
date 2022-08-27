const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/Employee')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')
const Manager = require('./classes/Manager')
const employeeBucket = []

const init = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter manager name',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'Enter manager ID',
      name: 'managerId'
    },
    {
      type: 'input',
      message: 'Enter manager email',
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: 'Enter manager office number',
      name: 'managerOffNum'
    },
  ])  
  .then((m) => {
    // console.log(t)
    const {managerName, managerId, managerEmail, managerOffNum} = m
    const manager = new Manager(managerName, managerId, managerEmail, managerOffNum)
    // console.log(employeeBucket)
    createTeam()
  })
}

const CreateTeam = () => {
  inquirer.prompt([
    {
      type: 'choices',
      message: 'Would you like to add someone to the team?',
      choices: ['intern', 'engineer'],
      name: 'newMemeber',
    }
    // list of choices of team names
    // take employee type, fire function to create employee if answer is yes
    // finish if done, push to HTML, if not~~
    // create team again
    // three more functions
  ])
  // TODO: Future development
//   let internPick = inquirer.prompt.choices[0]
//   if (internPick == 'intern') {
    
//   }
// }
}
const createIntern = (i) => {
  const {internName, internId, internEmail, internOffNum} =i
  const intern = new Intern(internName, internId, internEmail, internOffNum)
}
init()