const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const Employee = require('./classes/Employee');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const Manager = require('./classes/Manager');

const employeeBucket = [];

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
    const {managerName, managerId, managerEmail, managerOffNum} = m
    const manager = new Manager(managerName, managerId, managerEmail, managerOffNum)
    employeeBucket.push(manager)
    createTeam(manager)
  })
};

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
        pushEmployee()
      }
  })
};

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
      message: 'Enter intern school',
      name: 'internSchool'
    }
    ])
    .then((i) => {
      const {internName, internId, internEmail, internSchool} = i
      const intern = new Intern(internName, internId, internEmail, internSchool)
      employeeBucket.push(intern)
      createTeam(intern)
  })
};

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
      message: 'Enter engineer GitHub username',
      name: 'engineerUser',
    }
    ])
    .then((e) => {
      const {engineerName, engineerId, engineerEmail, engineerUser} = e
      const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerUser)
      employeeBucket.push(engineer)
      createTeam(engineer)
  })
};

const pushEmployee = () => {
  fs.writeFileSync('./dist/index.html', generateMarkdown(employeeBucket), (err) => err ? console.log("You missed some fields, start over") : console.log('HTML created'))
};

init()