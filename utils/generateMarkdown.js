// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Testing](#testing)

  [Contributions](#contributions)

  [License](#license)

  ## Description

  ![](https://img.shields.io/badge/License-${data.license}-green)

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  ${data.testing}

  ## Contributions

  ${data.guidelines}

  ## license

  This repo is covered by the ${data.license} license

  ## Questions

  Github Repository: https://github.com/${data.username}

  Emails regarding project should be sent to:

  ${data.email}


`;
}

module.exports = generateMarkdown;
