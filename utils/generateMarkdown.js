// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return  `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n*[License](#license)\n`;
  }
  return ""; 

 
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "none"){
    return `##License 
    Licensed under ${license} license`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## License Information
  ${data.license}
  ## How to install Application:
  ${data.installiation}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here]:${data.email}
`;
}

module.exports = generateMarkdown;
