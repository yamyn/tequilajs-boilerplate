const chalk = require('chalk');
const questions = require('../questions');

/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */
function askQuestions(title, questions, done) {
  this.log(chalk.yellow(`\n${title} questions:`));

  return this.prompt(questions).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers);
    done();
  });
}

module.exports = {};
