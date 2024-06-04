// controllers/bookController.js
const Book = require('../models/book');

exports.createBook = async (req, res) => {
  const { title, author, year } = req.body;
  try {
    const book = new Book({ title, author, year });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the book' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

