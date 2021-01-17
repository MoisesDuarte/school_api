const express = require('express');
const router = express.Router();

const School = require('../models/School');

// Query all Schools
router.get('/', (req, res) => {
    School.findAll()
    .then((schools) => {
        res.status(200).json(schools);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Query single school
router.get('/:id', (req, res) => {
    School.findOne({
        where: { id: req.params.id }
    })
    .then((school) => {
        res.status(200).json(school);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

// Add a school
router.post('/', (req, res) => {
    School.create({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
    })
    .then((school) => {
        res.status(201).json(school);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Update a school
// TODO: Return updated school
router.put('/:id', (req, res) => {
    School.update({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
    }, {
        where: { id: req.params.id },
    })
    .then((school) => {
        console.log(school);
        res.status(200).send(school);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// Delete a school
router.delete('/:id', (req, res) => {
    School.destroy({
        where: { id: req.params.id }
    })
    .then((school) => {
        res.status(200).json(school);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;