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
            addTeamManager()
        }else if(response.addEmployee === "Engineer") {
            addEngineer()
        }else if(response.addEmployee === "Intern"){
            addIntern()
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
                {
                    type:'input',
                    name:'name',
                    message:'Please enter your first and last name.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter your employee ID.',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is your email address?',
                },
                {
                    type:'input',
                    name:'office',
                    message:'Please enter office space number.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const manager = new TeamManager(answers.name, answers.id, answers.email, answers.officeNumber)
                managerArray.push(manager)
                init()
            })
    }
// add two more functions for addEngineer and addIntern
    function addEngineer() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, GITHUB
                {
                    type:'input',
                    name:'name',
                    message:'Please enter your first and last name.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter your employee ID',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is your email address?',
                },
                {
                    type:'input',
                    name:'username',
                    message:'Please enter your GitHub username.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                engineerArray.push(engineer)
                init()
            })
    }

    function addIntern() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, SCHOOL
                {
                    type:'input',
                    name:'name',
                    message:'Please enter your first and last name.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter your employee ID.',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is your email address?',
                },
                {
                    type:'input',
                    name:'school',
                    message:'Please enter your school.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                internArray.push(intern)
                init()
            })
    }

init()
