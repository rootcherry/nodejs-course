const path = require('path');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
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
  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address'
    });
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      });
    });
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  }
  console.log(req.query.search)
  res.send({
    products: []
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
