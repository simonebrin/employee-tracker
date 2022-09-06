import inquirer from "inquirer";
import db from "./connection/connection";
import CTable from "console.table";
const menuQuestions = {
    type: "list",
    name: "answer",
    message: "What would you like to do next?",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee"]
}

function menuQuestion() {
    inquirer.prompt(menuQuestions)
}

menuQuestion();