// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs= require('fs');
const path= require("path");
const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type : "input",
    message: "Enter the title of the project :",
    name:"Title"
},{
type : "input",
message :"Write a detailed description about the project :",
name : "Description"
},{
    type : "input",
    message : "Table of contents:",
    name : "Table of contents"

},{
   type : "input",
   message : "what is the installation process and tools required to run this project?",
   name : "Installation"
},{
    type : "input",
    message : "Enter the Usage of the app?",
    name : "Usage"
},{
    type : "input",
    message : "Mention all source and Credits :",
    name : "Credits"
},{
    type : "checkbox",
    message : "Enter the license used :",
    choices : ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    name : "License"
},{
    type : "input",
    message : "Enter the contributors to the project if any:",
    name : "Contribute"
},{
    type : "input",
    message : "what commands are needed to test this poject?",
    name : "Test"
},{
    type : "input",
    message : "Enter the gitHub username for inquiries :",
    name : "Contacts"
},{
type : "input",
message : "Enter your email for inquiries :",
name : "Email"
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        
        const markdownText= generateMarkdown(answers);
        writeToFile('createReadme', markdownText);
    });
}

// Function call to initialize app
init();
