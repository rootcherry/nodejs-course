const config = require('../config');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

forecast(44.1545, -75.7088, (error, data) => {
  console.log('Error.: ', error)
  console.log('Data..:', data)
});

geocode('Boston', (error, data) => {
  console.log('Error ', error);
  console.log('Data ', data);
});
