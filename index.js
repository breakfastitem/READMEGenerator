/**
 * Import Dependencies
 */
const fs = require('fs');
const inquirer= require('inquirer');

const mkDownGenerator = require('./utils/generateMarkdown');

//Define File Name


// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your Github Username?",
    name: "username"

},
{
    
    type: "input",
    message: "What is your email Address?",
    name: "email"
},
{
    
    type: "input",
    message: "What is your project name?",
    name: "title"
},
{
    type: "list",
    message: "Which license will be used?",
    name: "license",
    choices: ["mit","apache","GNU","none","other"]
},
{
    type: "input",
    message: "Please describe your project.",
    name: "description"
},
{
    type: "input",
    message: "Please describe how to install your project.",
    name: "installation"
},
{
    type: "input",
    message: "Please describe contribution guidelines.",
    name: "guidelines"
},
{
    type: "input",
    message: "Please describe what this should be used for.",
    name: "usage"
},
{
    type: "input",
    message: "Please describe testing guidelines.",
    name: "testing"
}
];

// function to write README file
function writeToFile(fileName, data) {
    const markDownString = mkDownGenerator(data);
    const fileName= data.title+".md";

    fs.writeFile(fileName, markDownString , (err) => {
        if(err){
            throw err;
        }else {
            console.log("success");
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response)=>writeToFile(fileName,response));
}

// function call to initialize program
init();
