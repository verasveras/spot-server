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


// Make a GET request to /people/1
router.get('/:id', (req, res, next) => {

	let id = req.params.id;
	People.find({where: 
		{id: id}
	})
	.then((person) => {
		res.status(200).json(person);
	})
	.catch(next);
});

// Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
// Make a GET request to retrieve the object created in the previous request
// Make a PUT request to /people and modify the attribute city to be “Brooklyn”
// Make a GET request to /people/1

// Make a DELETE request to /people/1
// Make a POST request to /people
// Make a GET request to /people




module.exports = router;