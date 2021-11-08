const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

// routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'John'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'John Doe'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'Yeehaw!'
  });
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
