const chalk = require('chalk');

console.log('Starting app');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const argv = yargs.argv;
var command = argv._[0];

switch (command){
    case 'add':
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
       
    }
    else {
        console.log(`Note title taken`);
    }
    break;
    case 'list':
    notes.getAll();
    break;
    case 'read':
    notes.getNote(argv.title);
    break;
    case 'remove':
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    break;
    default:
    console.log("Command not recognized");
}