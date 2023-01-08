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
        chioces: ["None","MIT","APACHE 2.0","BSD","GPLV2","GPLV3","ISC"]
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
        name: "Email",
        message: "Enter email address to provied a way to be reached for questions.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
