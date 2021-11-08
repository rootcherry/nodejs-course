const path = require('path');
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

// routes
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia, PA, USA'
  });
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
