const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
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
                "Manager",
                "Engineer",
                "Intern",
                "I'm finished adding employees."
            ]
        }
    ]).then((response) => {
        if(response.addEmployee === "Manager") {
            addManager()
        }else if(response.addEmployee === "Engineer") {
            addEngineer()
        }else if(response.addEmployee === "Intern"){
            addIntern()
        }else{
            // console.log(managerArray)
            // console.log(engineerArray)
            // console.log(internArray)
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
                    name:'officeNumber',
                    message:'Please enter their office space number.'
                }
            ]).then((answers) => {
                // catch answers located in lib js and create a constant
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
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
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                internArray.push(intern)
                init()
            })
    }

    // Sample text from BCs Support
    // function example2(){
    //      var htmlString = `boilerplatecode`
       
    //      for(/*for loop stuff here*/){
    //        htmlString+="card html code"
    //      }
       
    //      fs.writeFile(team.html, htmlString, (err)=>{console.error(err)})
    //    }
    function generateHtml() {
        let boilerplatecode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="../dist/styles.css">
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
        for (let i = 1; i < managerArray.length; i++) {
            managerCard += `
            <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <img src="../dist/images/manager.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">Manager</h1>
                <h4 class="card-text">${manager.name}</h4>
              </div>
              <div class="card-body contents">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Email: ${manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
        `
        }

        for (let i = 1; i < engineerArray.length; i++) {
            engineerCard += `
            <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <img src="../dist/images/engineer.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">Engineer</h1>
                <h4 class="card-text">${engineer.name}</h4>
              </div>
              <div class="card-body contents">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${engineer.id}</li>
                  <li class="list-group-item">Email: ${engineer.email}</li>
                  <li class="list-group-item">GitHub: ${engineer.github}</li>
                </ul>
              </div>
            </div>
          </div>
        `
        }

        for (let i = 1; i < internArray.length; i++) {
            internCard += `
            <div class="col-sm">
            <div class="card" style="width: 18rem;">
              <img src="../dist/images/intern.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h1 class="card-title">Intern</h1>
                <h4 class="card-text">${intern.name}</h4>
              </div>
              <div class="card-body contents">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.id}</li>
                  <li class="list-group-item">Email: ${intern.email}</li>
                  <li class="list-group-item">School: ${intern.school}</li>
                </ul>
              </div>
            </div>
          </div>
        `
        }

        let closingTags = `
                </div>
            </div>
        </body>
        <script src="../index.js"></script>
        </html>
        `
    
        fs.writeFile(team.html, htmlString, (err)=>{console.error(err)})
    }
init()
