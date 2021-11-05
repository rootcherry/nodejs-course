const config = require('../../config');
const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${config.wsKey}&query=${latitude},${longitude}`;

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location.')
    } else {
      callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degress out.`);
    }
  });
}

module.exports = forecast;
