// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of messages for user input
const messages = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repo?',
            validate: (value) => { if (value) { return true } else { return 'Please enter a title' } },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description.',
            validate: (value) => { if (value) { return true } else { return 'Please provide a description' } },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions here.',
            validate: (value) => { if (value) { return true } else { return 'Please provide installation instructions' } },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information here.',
            validate: (value) => { if (value) { return true } else { return 'Please provide usage the information' } },
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide guidelines for contributors here.',
            validate: (value) => { if (value) { return true } else { return 'Please provide guidelines' } },
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions here.',
            validate: (value) => { if (value) { return true } else { return 'Please provide test instructions' } },
        },
        {
            type: 'list',
            name: 'license',
            message: ' Please select a license below.',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None'],
            validate: (value) => { if (value) { return true } else { return 'Please select a license' } },
        },
        {
            type: ' input',
            name: 'email',
            message: 'What is your email?',
            validate: (value) => { if (value) { return true } else { return 'Please provide your email address' } },
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: (value) => { if (value) { return true } else { return 'Please provide your GitHub username' } },
        },
    ]);

// TODO: Create a function to write README file - fswrite file here
function writeToFile(fileName, data) {

        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err)
            } else {
                console.log('ReadMe Complete!')
            }
        })

    };

    // TODO: Create a function to initialize app
    function init() {

        messages().then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile("README.md", markdown)
        });
    };

    // Function call to initialize app
    init();
