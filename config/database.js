const { db } = require('./index');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(db.db_name, db.username, db.password, {
    host: db.host,
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connected successfully!');
}).catch((err) => {
    console.log('Unable to connect to database:', err);
});

module.exports = sequelize;