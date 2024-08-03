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
- [Contributing](#Contributing)

- [Tests](#Tests)

- [Questions](#Questions)

## Installation


## Usage

Provide instructions and examples for use. Include screenshots as needed.


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
