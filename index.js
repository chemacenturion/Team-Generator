const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const TeamManager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const managerArray = [];
const internArray = [];
const engineerArray = [];

function init() {

inquirer
    .prompt([
        {
            type:"list",
            name:"addEmployee",
            message:"What type of employee would you like to add?",
            choices: [
                "Team Manager",
                "Engineer",
                "Intern",
                "I'm finished adding employees."
            ]
        }
    ]).then((response) => {
            console.log(response)
        if(response.addEmployee === "Team Manager") {
            console.log("added team manager")
        }else if(response.addEmployee === "Engineer") {
            console.log("added an engineer")
        }else if(response.addEmployee === "Intern"){
            console.log("added an intern")
        }else{
            console.log("I'm finished adding employees")
        }
    })
// ask tutor how to write multiple prompts with then statements in code
// .then returns a callback which returns a response

}

    function addTeamManager() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, OFFICE SPACE NUMBER
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const manager = new TeamManager(answers.name, answers.id, answers.email, answers.officeNumber)
                managerArray.push(manager)
                init()
            })
    }
// add two more functions for addEngineer and addIntern

init()
