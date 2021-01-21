const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  try {
      const students = Student.findAll();
      res.status(200).json(students);
  } catch (err) {
      res.status(500).json(err);
  }
};

exports.getSingleStudent = async (req, res) => {
  try {
      const student = await Student.findOne({ where: { id: req.params.id } });
      res.status(200).json(student);
  } catch (err) {
      res.status(500).json(err);
  }
};

exports.createStudent = async (req, res) => {
    try {
        const createdStudent = await Student.create({
            name: req.body.name,
            studentId: req.body.studentId
        });
        res.status(200).json(createdStudent); 
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const updatedSchool = await Student.update({
            name: req.body.name,
            studentId: req.body.studentId
        }, {
            where: { id: req.params.id }
        });
        res.status(200).json({ updatedRows: updatedSchool });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const deletedSchool = await Student.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ deletedRows: deletedSchool })
    } catch (err) {
        res.status(500).json(err);
    }
};
