import inquirer from "inquirer";
import db from "./connection/connection";
import CTable from "console.table";

const menuQuestions = [
    {
    type: "list",
    name: "answer",
    message: "What would you like to do?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee"],
    },
]

function menuQuestion() {
    inquirer.prompt(menuQuestions).then((answers) => {
        console.log(answers);
        if (answers.menuQuestions === "View all departments") {
            
        }
    })
}

menuQuestion();