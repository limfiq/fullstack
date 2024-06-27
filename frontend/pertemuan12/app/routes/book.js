// /api/routes/books.js
const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/Book');

const router = express.Router();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get all books
router.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Create a new book
router.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

module.exports = router;
