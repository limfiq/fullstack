const Student = require('../models/studentModel');

// Create a new student
exports.create = (req, res) => {
  const student = new Student({
    name: req.body.name,
    age: req.body.age
  });
  student.save((err, student) => {
    if (err) {
      res.status(500).send({ message: 'Error creating student' });
    } else {
      res.send(student);
    }
  });
};

// Retrieve all students
exports.findAll = (req, res) => {
  Student.find().then(students => {
    res.send(students);
  }).catch(err => {
    res.status(500).send({ message: 'Error retrieving students' });
  });
};

// Retrieve a single student by ID
exports.findOne = (req, res) => {
  Student.findById(req.params.id).then(student => {
    if (!student) {
      res.status(404).send({ message: 'Student not found' });
    } else {
      res.send(student);
    }
  }).catch(err => {
    res.status(500).send({ message: 'Error retrieving student' });
  });
};

// Update a student
exports.update = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(student => {
    if (!student) {
      res.status(404).send({ message: 'Student not found' });
    } else {
      res.send(student);
    }
  }).catch(err => {
    res.status(500).send({ message: 'Error updating student' });
  });
};

// Delete a student
exports.delete = (req, res) => {
  Student.findByIdAndRemove(req.params.id).then(() => {
    res.send({ message: 'Student deleted successfully' });
  }).catch(err => {
    res.status(500).send({ message: 'Error deleting student' });
  });
};