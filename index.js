const fs = require('fs');
const inquirer= require('inquirer');

const mkDownGenerator = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
{

},
{

},
{

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

}

// function call to initialize program
init();
