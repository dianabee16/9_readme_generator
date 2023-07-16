// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const  path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How do you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub account?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
]).then((responses) => {
    console.log(responses);

// TODO: Create a function to write README file    
return fs.writeFileSync(path.join("README2.md"), generateMarkdown({...responses}))

 });

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
