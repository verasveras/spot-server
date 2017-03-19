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

	console.log('REQ BODY', req.body);
	let personInfo = req.body;

	People.create({ name: "Hermione", favoriteCity: "London"})
	.then((createdPerson) => {
		res.status(200).json(createdPerson);
	})
	.catch(next);

});

// Make a GET request to /people/:id
router.get('/:id', (req, res, next) => {

	let id = req.params.id;

	People.findById(id)
	.then((person) => {
		res.status(200).json(person);
	})
	.catch(next);

});

// Make a Put request to /people/:id
router.put('/:id', (req, res, next) => {

	let id = req.params.id;
	let info = req.body;

	People.findById(id)
	.then((person) => {
		return person.update(info)
	})
	.then((updatedPerson)=>{
		res.status(200).json(person);
	})
	.catch(next);

});

// Make a DELETE request to /people/:id
router.delete('/:id', (req, res, next) => {

	let id = req.params.id;

	People.destroy({where: {
		id: id
	}})
	.then((numberOfDeletes) => {
		res.status(200).send(`Deleted ${numberOfDeletes}`);
	})
	.catch(next);

});


module.exports = router;