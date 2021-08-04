const chalk = require('chalk');

module.exports = function() {
  // const { folderName } = this.answers;
  const folderName = 'tequila-app';

  if (this.options['skip-install']) {
    this.log(
      chalk.green(`
        To install dependencies, run
        ${chalk.white('$')} cd ${folderName}/
        ${chalk.white('$')} npm install
      `),
    );
    return;
  }

  this.npmInstall(null, { save: true }, { cwd: folderName });
};
