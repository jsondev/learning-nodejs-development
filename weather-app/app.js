const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/a85eccd95ea60eb2749e9da73b29b353/38.8594866,-77.3527744',
  json:true
}, (error, response, body)=> {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);   
}
});


/* const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
  console.log(errorMessage);
  } else {
  console.log(JSON.stringify(results, undefined, 2));
  }
 }); */
 

