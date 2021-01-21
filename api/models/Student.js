const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Student = db.define('Students', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
});

module.exports = Student;