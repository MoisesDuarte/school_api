const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const School = db.define('Schools', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = School;