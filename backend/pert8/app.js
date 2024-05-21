const express = require('express');
const mysql = require('mysql');

// Membuat koneksi MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'warung'
});

// Membuat koneksi ke database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware untuk menerima JSON dari request
app.use(express.json());

// Mendapatkan daftar menu
app.get('/menu', (req, res) => {
  const sql = 'SELECT * FROM menu';

  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

// Menambahkan menu baru
app.post('/menu', (req, res) => {
  const { nama_menu, harga } = req.body;
  
  // Periksa apakah ada data yang dikirimkan
  if (!nama_menu || !harga) {
    return res.status(400).send('Nama menu dan harga harus diisi');
  }

  const sql = 'INSERT INTO menu (nama_menu, harga) VALUES (?, ?)';
  const values = [nama_menu, harga];

  db.query(sql, values, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Menu added successfully');
  });
});


// Menghapus menu berdasarkan ID
app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM menu WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Menu deleted successfully');
  });
});

// Memperbarui menu berdasarkan ID
app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const { nama_menu, harga } = req.body;
  const sql = 'UPDATE menu SET nama_menu = ?, harga = ? WHERE id = ?';
  const values = [nama_menu, harga, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Menu updated successfully');
  });
});

// Menampilkan data menu berdasarkan ID
app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM menu WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      return res.status(404).send('Menu not found');
    }
    res.json(result[0]);
  });
});


// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
