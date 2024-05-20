// routes/loan.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new loan
router.post('/', async (req, res) => {
  const { buku_id, nama_peminjam, tanggal_pinjam } = req.body;
  try {
    await db.execute('INSERT INTO peminjaman (buku_id, nama_peminjam, tanggal_pinjam) VALUES (?, ?, ?)', [buku_id, nama_peminjam, tanggal_pinjam]);
    res.status(201).send('Loan created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all loans
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM peminjaman');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update a loan (return book)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { tanggal_kembali } = req.body;
  try {
    await db.execute('UPDATE peminjaman SET tanggal_kembali = ? WHERE id = ?', [tanggal_kembali, id]);
    res.status(200).send('Loan updated successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a loan
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM peminjaman WHERE id = ?', [id]);
    res.status(200).send('Loan deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
