// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project named?"
},
{
    type: "input",
    name: "description",
    message: "Describe the project"
},
{
    type: "input",
    name: "installInstruction",
    message: "How would you install this project?"
},
{
    type: "input",
    name: "usageInfo",
    message: "How would you be able to use this project?"
},
{
    type: "list",
    name: "license",
    message: "Which license would you like to add?",
    choices: ['Apache', 'Boost', 'Eclipse', 'No license']
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "What are the rules contributers must adhere to?"
},
{
    type: "input",
    name: "tests",
    message: "Are there tests you would like to add?"
},
{
    type: "input",
    name: "username",
    message: "Enter your GitHub username"
},
{
    type: "input",
    name: "email",
    message: "Enter your email"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('The file is made.')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    })
}

// Function call to initialize app
init();
