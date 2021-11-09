const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars location and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

// routes
app.get('', (req, res) => {
  res.render('index', {
      title: 'Weather',
      name: 'John Doe'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
      title: 'About Me',
      name: 'John Doe'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
      helpText: 'This is some helpful text.',
      title: 'Help',
      name: 'John Doe'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia, PA, USA'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'John Doe',
      errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'John Doe',
      errorMessage: 'Page not found.'
  })
})
 
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
