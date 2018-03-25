const yargs = require('yargs');
const axios = require('axios');



const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;

var encodeAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then()


