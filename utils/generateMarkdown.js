// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[GitHub License](https://img.shields.io/badge/license-${license.replace( "", "_" )}-green.svg)`;
    // ABOVE - MARKDOWN LANGUAGE USED FOR  URL LINK '[]()' FOR  GREEN LICENSE SVG IMAGE BADGE 
  }
  return '';
  // ABOVE - OTHERWISE RETURNS AN EMPTY STRING PER INSTRUCTIONS
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    // IF LICENSE IS NOT 'NONE', AS IN PREVIOUS FUNCTION, RETURNS FOLLOWING STRING '\N ENSURES NEW LINE IN OUTPUT
    return `\n [License](#license) \n`; 
    // MARKDOWN LANGUAGE FOR LICENSE LINK '[]()'
  }
  return ' '; // RETURNS EMPTY STRING
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## LICENSE
    
    This project is covered under the ${license} license.`;
    // TEMPLATE LITERAL TO INSERT 'LICENSE' VALUE IN CREATION OF LICENSE SECTION
  }
    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // EVERYTHING AFTER THE BACKTICK IS INCLUDED IN THE MARKDOWN
  return `# ${data.title}
  ${ renderLicenseBadge ( data.license)}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)

- [Usage](#usage)
${renderLicenseLink (data.license)}
- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install any dependencies you may need, use the following command:

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

To run tests, use the following command:

${data.test}

## Questions

For questions about the repo, you can contact me at
${data.email}.

Take a look at some of my other work at [${data.github}](https://github.com/${data.github}/).

`;
}
// TO EXPORT THIS MODULE FOR USE WITH INDEX.JS
module.exports = generateMarkdown;
