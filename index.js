import inquirer from "inquirer";
import db from "./connection/connection.js";
import CTable from "console.table";




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

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newDepartment',
      message: 'What is the department name?',
    }
  ]).then(answer => {
    console.log(answer)
    // db.promise()
    db.query('INSERT INTO departments SET?', { department_name: answer.newDepartment }, (err, res) => {
      // if (err) throw err;
      console.table(answer)
      menuQuestion();
    });
  });
}

function addRole() {
  db.promise().query('SELECT * FROM departments')
    .then((res) => {
      return res[0].map(departments => {
        return {
          name: departments.department_name,
          value: departments.id
        }
      })
    })
    .then((departments) => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'role',
          message: 'What role would you like to add?'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the salary for this role?'
        },
        {
          type: 'list',
          name: 'department',
          choices: departments,
          message: 'Select the department for this role:'
        }
      ])
    })
    .then(answer => {
      console.log(answer);
      return db.promise().query('INSERT INTO roles SET ?', { title: answer.role, salary: answer.salary, department_id: answer.department});
    })
    .then(res => {
      console.log('New role added')
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
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;

      default:
        break;
    }
  });
}

menuQuestion();

// db.promise()
//   .query(
//     "SELECT roles.title, roles.salary, departments.department_name as department FROM roles LEFT JOIN departments on roles.department_id=departments.id;"
//   )
//   .then((roles) => {
//     console.table(roles[0]);
//   });

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
