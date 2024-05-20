// routes/book.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new book
router.post('/', async (req, res) => {
  const { judul, pengarang, tahun_terbit } = req.body;
  try {
    await db.execute('INSERT INTO buku (judul, pengarang, tahun_terbit) VALUES (?, ?, ?)', [judul, pengarang, tahun_terbit]);
    res.status(201).send('Book created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM buku');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { judul, pengarang, tahun_terbit } = req.body;
  try {
    await db.execute('UPDATE buku SET judul = ?, pengarang = ?, tahun_terbit = ? WHERE id = ?', [judul, pengarang, tahun_terbit, id]);
    res.status(200).send('Book updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM buku WHERE id = ?', [id]);
    res.status(200).send('Book deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
