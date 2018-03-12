console.log('Starting app');
const fs = require('fs');
const os = require('os');
const _= require('lodash');
const notes = require('./notes');

var user = os.userInfo();
var res = notes.addNote();


/* fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err, data){
    if (err){
        console.log("File created unsuccessfully");
    }
    else {
        console.log("File created successfully");
    }
}); */

// console.log('Result:', notes.add(2,3));

console.log(_.isString(true));
console.log(_.isString('James'));
var filteredArray = _.uniq(['James', 1, 'James' , 1,2,3,4]);
console.log(filteredArray);