// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  } else if (license === 'Boost') {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  } else if (license === 'Eclipse') {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === 'Apache') {
  return "(https://opensource.org/licenses/Apache-2.0)"
} else if (license === 'Boost') {
  return "(https://www.boost.org/LICENSE_1_0.txt)"
} else if (license === 'Eclipse') {
  return "(https://opensource.org/licenses/EPL-1.0)"
} else {
  return ""
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license === 'Apache' || license === 'Boost' || license === 'Eclipse') {
  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
} else {return ""} };

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installInstruction, usageInfo, license, contributionGuidelines, tests, username, email}) {
return `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installInstruction}

## Usage
    
${usageInfo}

## License

${renderLicenseSection(license)}
    
## Contributing
    
${contributionGuidelines}
    
## Tests
    
${tests}
    
## Questions
    
-Github: [${username}](https://github.com/${username})
-Email: ${email}`;
}

export default generateMarkdown;
