var fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var notesString = fs.readFileSync('notes-data.json');
    var notes = JSON.parse(notesString);
    var note = {
        title,
        body
    };
    
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));


}
var getAll = () => {
    console.log('Getting all notes');
}
var getNote = (title) => {
    console.log('Getting note:', title);
}
var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}