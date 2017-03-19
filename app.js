'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

// body parser to make it easy to get body data.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes'));
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function (err, req, res, next) {
    res.status(500).send('Internal server error.');
});


app.listen(process.env.PORT || 3000);