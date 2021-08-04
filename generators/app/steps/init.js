const chalk = require('chalk');
const yosay = require('yosay');

module.exports = {
  sayHello() {
    this.log(
      yosay(
        `Welcome to the \n ${chalk.bgRed.white.bold(
          'TEQUILAJS Generator!',
        )} \n Let's scaffold a new ${chalk.bgRed.white('TEQUILAJS APP')}`,
      ),
    );
  },
};
