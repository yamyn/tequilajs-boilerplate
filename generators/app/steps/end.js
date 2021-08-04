/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */
const chalk = require('chalk');
const printMessage = require('print-message');

module.exports = function() {
  printMessage(
    [
      `Enjoy your ${chalk.red('TequilaJS Socket.io')} project!`,
      '---',
      'Next steps:',
      `${chalk.yellow('1)')} Go to your generated events`,
      chalk.blue('cd <path_to_your_generated_app>'),
      `${chalk.yellow('2)')} Run your server`,
      chalk.blue('npm run start:dev'),
    ],
    {
      printFn: this.log,
    },
  );
};
