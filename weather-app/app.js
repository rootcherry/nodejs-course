const config = require('../config');
const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=${config.wsKey}&query=37.8267,-122.4233`;

request({url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  const ob = response.body.current;
  console.log(`${ob.weather_descriptions[0]}. It is currently ${ob.temperature} degress out. It feels like ${ob.feelslike} degress out.`);
});

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${config.mbKey}`;

request({
  url: geocodeURL,
  json: true
}, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
