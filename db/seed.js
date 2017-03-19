const db = require('./index');
const People = require('./models/people-model');


let peopleToSeed = [{
	name: 'Galen Veras',
	favoriteCity: 'Boston'
},
{
	name: 'Harry Potter',
	favoriteCity: 'Hogsmead'
}];


db.sync({force: true})
.then(() => {
	let peoplePromises = peopleToSeed.map((person) => {
		return People.findOrCreate({where: person});
	})

	return Promise.all(peoplePromises);
})
.then(() => {
	console.log('Everything is okay!')
})
.catch(console.log);