const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const assets = require('./data/assets.json')
const entities = require('./data/entities.json')


// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.route('/api/assets').get( function (req, res) {
  res.json(assets)
})

app.route('/api/entities').get(function (req, res) {
  res.json(entities)
})


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});