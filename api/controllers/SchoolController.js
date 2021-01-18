const School = require('../models/School');

exports.getAllSchools = async (req, res) => {
    try {
        const schools = await School.findAll();
        res.status(200).json(schools);
    } catch (err) {
        res.status(500).json(err);
    }
};
        
exports.getSingleSchool = async (req, res) => {
  try  {
      const school = await School.findOne({ where: { id: req.params.id } });
      res.status(200).json(school);
  } catch (err) {
      res.status(500).json(err);
  }
};

exports.createSchool = async (req, res) => {
    try {
        const createdSchool = await School.create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
        });
        res.status(200).json(createdSchool);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateSchool = async (req, res) => {
    try {
        const updatedSchool = await School.update({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
        }, {
            where: { id: req.params.id },
        });
        res.status(200).json({ updatedRows: updatedSchool });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteSchool = async (req, res) => {
    try {
        const deletedSchool = await School.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ deletedRows: deletedSchool });
    } catch (err) {
        res.status(500).json(err);
    }  
};
