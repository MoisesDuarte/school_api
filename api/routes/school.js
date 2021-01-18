const express = require('express');
const router = express.Router();

const SchoolController = require('../controllers/SchoolController');

// Query all Schools
router.get('/', SchoolController.getAllSchools);

// Query single school
router.get('/:id', SchoolController.getSingleSchool);

// Add a school
router.post('/', SchoolController.createSchool);

// Update a school
router.put('/:id', SchoolController.updateSchool);

// Delete a school
router.delete('/:id', SchoolController.deleteSchool);

module.exports = router;