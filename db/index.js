const Sequelize = require('sequelize');
console.log('URL!', process.env.DATABASE_URL)
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/spotify');
// Postgres url for Heroku OR for local.


module.exports = db;