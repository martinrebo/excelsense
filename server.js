const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/api/assets', function(req, res) {
    res.sendFile(path.join(__dirname, 'data', 'assets.json' ))
})

app.get('/api/entities', function(req, res) {
    res.sendFile(path.join(__dirname, 'data', 'entities.json' ))
})


app.listen(process.env.PORT || 8080);