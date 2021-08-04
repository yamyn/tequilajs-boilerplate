const { join } = require('path');
const fs = require('fs');

module.exports = function() {
  const { answers } = this;
  const payload = {
    config: answers,
  };
  const pathToApp = 'tequila-app';
  const appFolder = 'express';

  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/src`)),
    this.destinationPath(`${pathToApp}/src`),
    payload,
  );

  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/package.json`)),
    this.destinationPath(`${pathToApp}/package.json`),
    payload,
  );

  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.editorconfig`)),
    this.destinationPath(`${pathToApp}/.editorconfig`),
    payload,
  );
  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.env.example`)),
    this.destinationPath(`${pathToApp}/.env.example`),
    payload,
  );
  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.env`)),
    this.destinationPath(`${pathToApp}/.env`),
    payload,
  );

  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.eslintrc.json`)),
    this.destinationPath(`${pathToApp}/.eslintrc.json`),
    payload,
  );
  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.gitignore`)),
    this.destinationPath(`${pathToApp}/.gitignore`),
    payload,
  );
  this.fs.copyTpl(
    this.templatePath(join(`./${appFolder}/.prettierrc`)),
    this.destinationPath(`${pathToApp}/.prettierrc`),
    payload,
  );
};
