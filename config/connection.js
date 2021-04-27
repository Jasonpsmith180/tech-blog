// import sequelize constructor
const Sequelize = require('sequelize');

// dotenv dependency for env variables
require('dotenv').config();

// create connection to db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;