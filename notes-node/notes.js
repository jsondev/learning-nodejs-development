console.log('Starting notes.js');

module.exports.age = 31;

var addNote = (title, body) => {
    console.log('Adding note', title, body);
}

module.exports = {
 addNote
}