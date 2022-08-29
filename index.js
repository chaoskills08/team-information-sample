const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classes/Employee')
const Engineer = require('./classes/Engineer')
const Intern = require('./classes/Intern')
const Manager = require('./classes/Manager')
const employeeBucket = []
const generateMarkdown = require('./utils/generateMarkdown')

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
    employeeBucket.push(manager)
    createTeam()
  })
}

const createTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to add someone to the team?',
      choices: ['intern', 'engineer', 'no further team members'],
      name: 'newMember',
    }
  ]) 
  .then ((newTeamMember) => {
    switch (newTeamMember.newMember) {
      case "engineer":
        createEngineer();
        break;
      case "intern":
        createIntern();
        break;
      case "no further team members":
        console.log(employeeBucket)
        // pushEmployee();
      }
  })
}

const createIntern = () => {

  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter intern name',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'Enter intern ID',
      name: 'internId'
    },
    {
      type: 'input',
      message: 'Enter intern email',
      name: 'internEmail'
    },
    {
      type: 'input',
      message: 'Enter intern office number',
      name: 'internOffNum'
    }
    ])
    .then((i) => {
      const {internName, internId, internEmail, internOffNum} = i
      const intern = new Intern(internName, internId, internEmail, internOffNum)
      console.log(intern)
      employeeBucket.push(intern)
      createTeam()
})
}

const createEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter engineer name',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'Enter engineer ID',
      name: 'engineerId'
    },
    {
      type: 'input',
      message: 'Enter engineer email',
      name: 'engineerEmail'
    },
    {
      type: 'input',
      message: 'Enter engineer office number',
      name: 'engineerOffNum'
    }
    ])
    .then((e) => {
      const {engineerName, engineerId, engineerEmail, engineerOffNum} = e
      const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerOffNum)
      console.log(engineer)
      employeeBucket.push(engineer)
      createTeam()
})
}
init()