#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import { exec } from 'child_process';
import fsExtra from 'fs-extra';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const templateFolder = 'TEMPL';
const currentUrl = import.meta.url;
const currentPath = dirname(fileURLToPath(currentUrl));
const templatePath = join(currentPath, templateFolder);

console.log(chalk.bold.yellow('Welcome to Create React Legacy.'));

const questions = [
  {
    type: 'input',
    name: 'appName',
    message: chalk.blue.bold('Enter the name of your app: ')
  }
];

inquirer.prompt(questions).then(async (answers) => {
  console.log(chalk.green('\nCreating your React Legacy app...\n'));
  console.log(chalk.yellow(`App Name: ${answers.appName}`));

  const { appName } = answers;

  console.log(chalk.bold.yellow(`Creating folder: ${appName}`));
  try {
    await fsExtra.mkdir(appName);
    console.log(chalk.bold.green(`Folder created: ${appName}`));

    console.log(chalk.bold.yellow('Copying files...'));
    await fsExtra.copy(templatePath, appName);
    console.log(chalk.bold.green('Files copied successfully.'));

    console.log(chalk.bold.yellow('Initializing npm...'));
    exec(`cd ${appName} && npm init -y`, async (error, stdout, stderr) => {
      if (error) {
        console.error(chalk.red('Error initializing npm:'), error);
        return;
      }

      console.log(chalk.bold.green('npm initialized.'));


      console.log(chalk.bold.green('React Legacy app created successfully.'));
      console.log(chalk.white.bold.bgGreen('Happy hacking ;)'));
    });
  } catch (error) {
    console.error(chalk.red('Error creating folder or copying files:'), error);
    return;
  }
});