// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


        ## DESCRIPTION: 
       
        ${data.description}
        
        
        ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [License](#license)
        * [Questions](#questions)


        ## INSTALLATION: 
       
        ${data.installation}


        ## USAGE: 
        
        ${data.usage}


        ## CONTRIBUTING: 
        
        ${data.contributing}


        ## TESTS: 
       
        ${data.tests}


        ## LICENSE: 
       
        ${data.license}


        ## EMAIL:
       
        ${data.email}


        ## USERNAME: 
        
        ${data.username}
`;
}

module.exports = generateMarkdown;
