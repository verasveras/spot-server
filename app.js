'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 3000);