const express = require('express');
const app = express();

// routes
app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>');
})

app.get('/help', (req, res) => {
  res.send([{
    name: 'John',
    age: 21
  }, {
    name: 'Jane',
    age: 23
  }]);
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia, PA, USA'
  });
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
