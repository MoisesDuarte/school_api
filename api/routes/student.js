const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

// Query all students
router.get('/', StudentController.getAllStudents);

// Query single student
router.get('/:id', StudentController.getSingleStudent);

// Create a student
router.post('/', StudentController.createStudent);

// Update a student
router.put('/:id', StudentController.updateStudent);

// Delete a student
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;