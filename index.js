import inquirer from "inquirer";
import db from "./connection/connection.js";
import CTable from "console.table";
// import { connection } from "mongoose";

const mainMenuQuestions = [
  {
    type: "list",
    name: "answer",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee",
    ],
  },
];

function listDepartments() {
  db.promise()
    .query("SELECT departments.id, departments.department_name FROM departments;")
    .then((departments) => {
      console.table(departments[0]);
      menuQuestion();
    });
}

function listRoles() {
  db.promise()
    .query(
      "SELECT roles.id, roles.title, roles.salary, departments.department_name as department FROM roles LEFT JOIN departments on roles.department_id=departments.id;"
    )
    .then((roles) => {
      console.table(roles[0]);
      menuQuestion();
    });
}

function viewEmployees() {
  db.promise()
    .query(
      "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name FROM employees LEFT JOIN roles on roles.id=employees.roles_id LEFT JOIN departments on departments.id=roles.department_id;"
    )
    .then((employees) => {
      console.table(employees[0]);
      menuQuestion();
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
      case "View all employees":
        viewEmployees();
        break;

      default:
        break;
    }
  });
}

menuQuestion();

db.promise()
  .query(
    "SELECT roles.title, roles.salary, departments.department_name as department FROM roles LEFT JOIN departments on roles.department_id=departments.id;"
  )
  .then((roles) => {
    console.table(roles[0]);
  });

const addDepartmentQuestion = [
  {
    type: "input",
    name: "department",
    message: "Add the department name",
  },
];

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
