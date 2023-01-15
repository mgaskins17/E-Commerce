const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');


// Boiler plate of setting up application to use express with an available PORT
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server --- Comes from boiler plate information from notes
// sequelize.sync() automatically synchronizes all models with the database assigned
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
})
