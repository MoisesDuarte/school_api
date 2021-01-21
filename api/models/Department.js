const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const School = require('./School');

const Department = db.define('Departments', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Department;