// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}
function renderLicense(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} 
  by Priyanka Vivek  ${renderLicense(data.License)}
  ## Description
  ${data.Description}
  ## Table of Contents
  * [Installation](#Installation)
  * [How to Use This Application](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Contributors](#Contribute)
  * [Testing](#Test)
  * [ Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ##Credits
  ${data.Credits}
  ## Contributors
  ${data.Contribute}
  ## Testing
  ${data.Test}
  ## License
  ${renderLicenseBadge(data.License)}
  
  ## Questions

  contact-me for any questions at

  GitHub :  [GitHub/${data.Github}](https://github.com/${data.Github}) 

  Email : [Gmail/${data.Email}](https://gmail.com/${data.Email})
`;
}

module.exports = generateMarkdown;
