const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config/index')

const port = 3000;

// App init
const app = express();

// Database init
const sequelize = new Sequelize(config.db.db_name, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Database connected successfully!');
})
.catch((err) => {
    console.log('Unable to connect to database:', err);
});

// App dependencies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(config.port, () => {
    console.log(`App listening on localhost:${port}`);
});