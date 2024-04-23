const express = require('express');
const router = express.Router();
const bookController = require('./bookController');

// Menetapkan fungsi-fungsi controller ke rute tertentu
router.get('/books', bookController.getAllBooks);
router.post('/books', express.json(), bookController.createBook);
router.get('/books/:bookId', bookController.getBookById);
router.put('/books/:bookId', express.json(), bookController.updateBookById);
router.delete('/books/:bookId', bookController.deleteBookById);

module.exports = router;
