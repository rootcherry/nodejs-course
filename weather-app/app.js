const config = require('../config');
const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${config.key}&query=37.8267,-122.4233`;

request({url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  const ob = response.body.current;
  console.log(`${ob.weather_descriptions[0]}. It is currently ${ob.temperature} degress out. It feels like ${ob.feelslike} degress out.`);
});
