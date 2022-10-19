import inquirer from 'inquirer';
import db from './connection/connection.js';
import CTable from 'console.table';

const mainMenuQuestions = [
    {
    type: 'list',
    name: 'answer',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee'],
    },
]

function listDepartments() {
  db.promise()
    .query("SELECT departments.department_name FROM departments;")
    .then((departments) => {
      console.table(departments[0]);
    });
}

function listRoles() {
  db.promise()
    .query("SELECT roles.title FROM roles;")
    .then((roles) => {
      console.table(roles[0]);
    });
}

function menuQuestion() {
    inquirer.prompt(mainMenuQuestions).then((answers) => {
        console.log(answers.answer);
        switch (answers.answer) {
          case "View all departments":
            listDepartments();
            break;
          case "View all roles":
            listRoles();
            break;

          default:
            break;
        }
    })
}

menuQuestion();
db.promise()
  .query(
    'SELECT roles.title, roles.salary, departments.department_name as department FROM roles LEFT JOIN departments on roles.department_id=departments.id;'
  )
  .then((roles) => {
    console.table(roles[0]);
  });

const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'department',
        message: 'Add the department name'
    }
]



// const addRoleQuestions = [
//     {
//         type: 'input',
//         name: 'role',
//         message: 'Input role:'
//     },
//     {
//         type: 'input',
//         name: 'salary',
//         message: 'Enter new role salary:'
//     },
//     {
//         type: 'list',
//         name: 'departments',
//         message: 'Select your department:',
//         choices: 
//     }
// ]