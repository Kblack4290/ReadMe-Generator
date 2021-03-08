// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {

  switch (license) {

    case 'GNU AGPLv3':
      licenseBadge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
      break;
      case 'GNU GPLv3':
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
      case 'GNU LGPLv3':
      licenseBadge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
      break;
      case 'Mozilla Public License 2.0':
      licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
      case 'Apache License 2.0':
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
      case    'MIT License':
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
      case 'Boost Software License 1.0':
      licenseBadge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      break;
      case  'The Unlicense':
      licenseBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
      case 'None':
        return licenseBadge = "";
  }

return licenseBadge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 

  switch (license) {
    case 'GNU AGPLv3':
      licenseLink = "(https://www.gnu.org/licenses/agpl-3.0)";
      break;
      case 'GNU GPLv3':
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
      case 'GNU LGPLv3':
      licenseLink = "(https://www.gnu.org/licenses/lgpl-3.0)";
      break;
      case 'Mozilla Public License 2.0':
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      break;
      case 'Apache License 2.0':
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
      case  'MIT License':
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
      case 'Boost Software License 1.0':
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
      case  'The Unlicense':
      licenseLink = "(http://unlicense.org/)";
      break;
      case 'None':
      return licenseLink = "";
  }

  return licenseLink;

};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 

  switch (license) {
    case 'GNU AGPLv3':
      licenseSection = "Licensed with GNU AGPLv3 " + renderLicenseLink(license);
      break;
      case 'GNU GPLv3':
        licenseSection = "Licensed with GNU GPLv3 " + renderLicenseLink(license);
      break;
      case 'GNU LGPLv3':
        licenseSection = "Licensed with GNU LGPLv3 " + renderLicenseLink(license);
      break;
      case 'Mozilla Public License 2.0':
        licenseSection = "Licensed with Mozilla Public License 2.0 " + renderLicenseLink(license);
      break;
      case 'Apache License 2.0':
        licenseSection = "Licensed with Apache License 2.0 " + renderLicenseLink(license) ;
      break;
      case  'MIT License':
      licenseSection = " Licensed with MIT License " + renderLicenseLink(license) ;
      break;
      case 'Boost Software License 1.0':
        licenseSection = "Licensed with Boost Software License 1.0 " + renderLicenseLink(license) ;
      break;
      case  'The Unlicense':
        licenseSection = "Licensed with The Unlicense " + renderLicenseLink(license) ;
      break;
      case 'None':
      return licenseSection = "";
  }

  return licenseSection;
  
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}





 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [License](#license)
 * [Questions](#questions)
 




        ## DESCRIPTION: 
       
        ${data.description}


        ## INSTALLATION: 
       
        ${data.installation}


        ## USAGE: 
        
        ${data.usage}


        ## CONTRIBUTING: 
        
        ${data.contributing}


        ## TESTS: 
       
        ${data.tests}


        ## LICENSE:
        
        
        ${renderLicenseBadge(data.license)}

        ${renderLicenseSection(data.license)}


        ## EMAIL:
       
        ${data.email}


        ## USERNAME: 
        
        ${data.username}
`;
}

module.exports = generateMarkdown;
