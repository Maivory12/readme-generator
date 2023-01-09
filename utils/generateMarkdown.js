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
    return`* [License](#license)`;
  }
  return ""; 

 
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "none"){
    return `## License 
  Licensed under ${license} license`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  ${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ${renderLicenseSection(data.license)}
  ## What to install for Application:
  ${data.installation}
  ## Usage:
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
