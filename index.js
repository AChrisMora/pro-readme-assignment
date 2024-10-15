// TODO: Include packages needed for this application
import inquirer from inquirer
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
    name: "install-instruction",
    message: "How would you install this project?"
},
{
    type: "input",
    name: "usage-info",
    message: "How would you be able to use this project?"
},
{
    type: "input",
    name: "contribution-guidelines",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
