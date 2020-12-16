// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  ## Description
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}

  ## testing
  ${data.testing}

  ## contributions
  ${data.guidelines}

  ## license
  ${data.license}

  ## Questions
  Github Repository: https://github.com/${data.username}

  Emails regarding project should be sent to:

  ${data.email}


`;
}

module.exports = generateMarkdown;
