#!/usr/bin/env node
const {createFile} = require('../createFile');

const argv = require('yargs')
  .usage('Usage:generate <statetype> <statename>')
  .command('generate', 'Generate a component')
  .example('generate -l Welcome', 'Create a state less component called Welcome')
  .example('generate -f Welcome', 'Create a state full component called Welcome')
  .alias('l', 'stateless')
  .alias('f', 'statefull')
  .nargs('l', 1)
  .nargs('f', 1)
  .describe('l', 'Generate stateless/function component')
  .describe('f', 'Generate statefull/class component')
  .help('h')
  .alias('h', 'help')
  .epilog('Made By blessed-tawanda Code0')
  .argv;

if(argv.statefull) {
  const componentName = argv.statefull
  createFile(componentName, 'stateFull')
}

if (argv.stateless) {
  const componentName = argv.stateless
  createFile(componentName, 'stateLess')
}
