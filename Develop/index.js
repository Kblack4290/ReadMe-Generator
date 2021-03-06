// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markDown = require('./utils/generateMarkdown');
const { log } = require('console');

// TODO: Create an array of messages for user input
const messages = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repo?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description.',

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions here.'

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information here.',

        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for contributors here.',

        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions here.'

        },
        {
            type: 'list',
            name: 'license',
            message: ' Please select a license below.',
            choices: ['APACHE 2.0', 'GPL 3.0', 'MIT', 'BSD 3', 'None'],

        },
        {
            type: ' input',
            name: 'email',
            message: 'What is your email?',

        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',

        },
    ]);

// TODO: Create a function to write README file - fswrite file here
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log("ReadME Complete!");
    }
    catch (err) {
        console.log(err);
    }
};

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
