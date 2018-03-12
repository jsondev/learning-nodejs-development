console.log('Starting app');
const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World', function(err, data){
    if (err){
        console.log("File created unsuccessfully");
    }
    else {
        console.log("File created successfully");
    }
});