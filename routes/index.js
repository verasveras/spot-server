const express = require('express');
const router = express.Router();

router.use('/people', require('./people'));


module.exports = router;
