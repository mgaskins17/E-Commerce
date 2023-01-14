require('dotenv').config();
const Sequelize = require('sequelize');

// From boiler Plate - setting up new connection via local host
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost', // This can also be 127.0.0.1 if "localhost" doesn't work
//     dialect: 'mysql',
//     port: 3306 // What is PORT 3306
//   }
// )/


// This is set up to use JAWSDB which is the database structure Heroku uses?
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // Using shorthand for if/else whether you're locally hosting or deployed to Heroku 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
