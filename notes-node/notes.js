console.log('Starting notes.js');

module.exports.age = 31;

module.exports.addNote = () => {
console.log('addNote');
return 'New note';
}

module.exports.add = (a,b) => {
    return a + b;
}