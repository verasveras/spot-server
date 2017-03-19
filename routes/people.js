const express = require('express');
const router = express.Router();
const People = require('../db/models/people-model');

// Make a GET request to /people
router.get('/', (req, res, next) => {
	People.findAll()
	.then((allPeople) => {
		res.status(200).json(allPeople);
	})
	.catch(next);
});


// Make a POST request to /people
router.post('/', (req, res, next) => {
	let personInfo = req.body.person;
	People.find(personInfo)
	.then(() => {
		res.status(200).json(allPeople);
	})
	.catch(next);
});


// Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
// Make a GET request to retrieve the object created in the previous request
// Make a PUT request to /people and modify the attribute city to be “Brooklyn”
// Make a GET request to /people/1
// Make a DELETE request to /people/1
// Make a GET request to /people




module.exports = router;