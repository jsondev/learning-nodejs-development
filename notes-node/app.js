console.log('Starting app');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var command = process.argv[2];
const argv = yargs.argv;

switch (command){
    case 'add':
    notes.addNote(argv.title, argv.body);
    break;
    case 'list':
    notes.getAll();
    break;
    case 'read':
    notes.read(title);
    break;
    case 'remove':
    notes.remove(title);
    break;
    default:
    console.log("Command not recognized");
}