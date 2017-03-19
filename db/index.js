const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/spotify');
// Postgres url for Heroku OR for local.


module.exports = db;