const express = require('express');
const router = express.Router();
const { create, findAll, findOne, update, delete: deleteStudent } = require('../controllers/studentController');

router.post('/student', create);
router.get('/students', findAll);
router.get('/students/:id', findOne);
router.put('/students/:id', update);
router.delete('/students/:id', deleteStudent);

module.exports = router;