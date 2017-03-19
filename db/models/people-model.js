const Sequelize = require('sequelize');
const db = require('../index');

let People = db.define('people', {
	name: {
        type: Sequelize.STRING
    },
    favoriteCity: {
        type: Sequelize.STRING
    },
})

module.exports = People;

