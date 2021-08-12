const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeamArray = [];

function init() {

inquirer
    .prompt([
        {
            type:"list",
            name:"addEmployee",
            message:"What type of employee would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I'm finished adding employees."
            ]
        }
    ]).then((response) => {
            // console.log(response)
        if(response.addEmployee === "Manager") {
            addManager()
        }else if(response.addEmployee === "Engineer") {
            addEngineer()
        }else if(response.addEmployee === "Intern"){
            addIntern()
        }else{
            generateTeam();
        }
    })
// ask tutor how to write multiple prompts with then statements in code
// .then returns a callback which returns a response

}

    function addManager() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, OFFICE SPACE NUMBER
                {
                    type:'input',
                    name:'name',
                    message:'Please enter the first and last name of the Manager.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter their employee ID.',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is their email address?',
                },
                {
                    type:'input',
                    name:'office',
                    message:'Please enter their office space number.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const teamMember = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                generateTeamArray.push(teamMember)
                init();
            });
    }
// add two more functions for addEngineer and addIntern
    function addEngineer() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, GITHUB
                {
                    type:'input',
                    name:'name',
                    message:'Please enter their first and last name.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter their employee ID',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is their email address?',
                },
                {
                    type:'input',
                    name:'username',
                    message:'Please enter their GitHub username.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const teamMember = new Engineer(answers.name, answers.id, answers.email, answers.github)
                generateTeamArray.push(teamMember)
                init();
            });
    }

    function addIntern() {
        inquirer
            .prompt([
                // put questions here ID, EMAIL, SCHOOL
                {
                    type:'input',
                    name:'name',
                    message:'Please enter their first and last name.',
                },
                {
                    type:'input',
                    name:'id',
                    message:'Please enter their employee ID.',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is their email address?',
                },
                {
                    type:'input',
                    name:'school',
                    message:'Please enter their school.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const teamMember = new Intern(answers.name, answers.id, answers.email, answers.school)
                generateTeamArray.push(teamMember)
                init();
            });
    }

    function generateTeam() {
        const htmlArray = []
        const htmlBoilerPlate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="../dist/styles.css"
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Team Generator</h1>
              </div>
            </div>
            <!-- need to media queries align center for responsiveness between desktop and mobile -->
            <div class="container">
              <div class="row">
        `
        htmlArray.push(htmlBoilerPlate);

        for (let i = 1; i < generateTeamArray.length; i++) {
            let object = `
            <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h1 class="card-title">${generateTeamArray[i].name}</h1>
                <h4 class="card-text">${generateTeamArray[i].title}</h4>
              </div>
              <div class="card-body contents">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${generateTeamArray[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${generateTeamArray[i].email}">${generateTeamArray[i].email}</a></li>
            `
            if (generateTeamArray[i].officeNumber) {
                object += `
                <li class="list-group-item">Office Number: ${generateTeamArray[i].officeNumber}</li>
                `
            }
            if (generateTeamArray[i].school) {
                object += `
                <li class="list-group-item">School: ${generateTeamArray[i].school}</li>
                `
            }
            if (generateTeamArray[i].github) {
                object += `
                <li class="list-group-item">GitHub: <a href="https://github.com/${generateTeamArray[i].github}">${generateTeamArray[i].github}</a></li>
                `
            }
            object += `
                        </ul>
                    </div>
                </div>
            </div>
            `
            htmlArray.push(object)
        }

        const htmlClosingTags = `
                </div>
            </div>
        </body>
        <script src="../index.js"></script>
        </html>
        `
        htmlArray.push(htmlClosingTags);

        fs.writeFile(`../dist/generated.html/${generateTeamArray[0]}html`, htmlArray.join(""), function (err) {

        })
    }

init()
