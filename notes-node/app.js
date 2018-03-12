console.log('Starting app');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

console.log(process.argv);

var command = process.argv[2];
const argv = yargs.argv;

console.log('Process', process.argv);
console.log('Yargs', argv);


switch (command){
    case 'add':
    notes.addNote(argv.title, argv.body);
    break;
    case 'list':
    notes.getAll();
    break;
    case 'read':
    console.log('Fetching notes');
    break;
    case 'remove':
    console.log('Removing note');
    break;
    default:
    console.log("Command not recognized");
}