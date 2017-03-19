const express = require('express');
const router = express.Router();
const People = require('../db/models/people-model');

// Please make the person object have the following attributes: id, name : “Sean”, favoriteCity : “New York”
// Make a GET request to retrieve the object created in the previous request

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

	console.log('REQ BODY', req.body);

	let personInfo = req.body.person;

	People.create({where:
		{personInfo}
	})
	.then((createdPerson) => {
		res.status(200).json(createdPerson);
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



// Make a PUT request to /people and modify the attribute city to be “Brooklyn”


// Make a DELETE request to /people/1
router.delete('/:id', (req, res, next) => {

	let id = req.params.id;

	People.destroy({where: 
		{id: id}
	})
	.then((numberOfDeletes) => {
		res.status(200).send(`deleted ${numberOfDeletes}`);
	})
	.catch(next);
});





module.exports = router;