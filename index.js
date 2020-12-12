/**
 * Import Dependencies
 */
const fs = require('fs');
const inquirer= require('inquirer');

const mkDownGenerator = require('./utils/generateMarkdown');

//Define File Name

const fileName ="MReadME.txt";


// array of questions for user
const questions = [
{
    type: "input",
    message: "What is your Github Username?",
    name: "userName"

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
}
];

// function to write README file
function writeToFile(fileName, data) {
    const markDownString = mkDownGenerator(data);

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
