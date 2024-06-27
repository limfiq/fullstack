// /api/models/Book.js
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);
