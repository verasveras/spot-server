'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.use('/api', require('./routes'));

app.use('/', (req, res)=>{
	res.status(200).send('Hello!');
});

app.listen(process.env.PORT || 3000);