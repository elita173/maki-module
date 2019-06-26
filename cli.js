#!/usr/bin/env node

const execSync = require('child_process').execSync;
const [,, command, ...args] = process.argv;
const cwd = process.cwd();

process.chdir(__dirname);

switch(command) {
  case 'install': {
    execSync(`./cli/install.sh ${cwd} ${args.join(' ')}`, { stdio: 'inherit' });
    break;
  }
  case 'make': {
    execSync(`./cli/make.sh ${cwd} ${args.join(' ')}`, { stdio: 'inherit' });
    break;
  }
  case 'undo': {
    execSync(`./cli/undo.sh ${cwd} ${args.join(' ')}`, { stdio: 'inherit' });
    break;
  }
  default: {
    execSync('./cli/help.sh', { stdio: 'inherit' });
  }
}
