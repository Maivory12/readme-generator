// Packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description and functionality of this project.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select license that applies to this project.",
        choices: ["None","MIT","APACHE 2.0","OTHER"],
    },
    {
        type: "input",
        name: "installation",
        message: "List the steps needed to install your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the languages of technologies associated with your project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list any contributers to your project.",
    },
    {
        type: "input",
        name: "test",
        message: "If this applies, please provide a walkthrough of required test.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address to provied a way to be reached for questions.",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("README.md file is being created")
        writeToFile("./generatedMarkdown.md", generateMarkdown({...response}))
    });
}

// Function call to initialize app
init();
