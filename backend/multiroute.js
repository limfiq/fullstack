// const express = require('express');
// const app = express();

// // Rute dengan beberapa penangan
// app.get('/', (req, res, next) => {
//   console.log('Penangan pertama');
//   next();
// }, (req, res) => {
//   console.log('Penangan kedua');
//   res.send('Hello World!');
// });

// // Rute dengan parameter rute
// app.get('/users/:userId', (req, res) => {
//   const userId = req.params.userId;
//   res.send(`ID Pengguna: ${userId}`);
// });

// // Middleware penanganan kesalahan
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Ada yang rusak!');
// });

// app.listen(3000, () => {
//   console.log('Server berjalan pada port 3000');
// });


const express = require('express');
const app = express();

// Daftar pengguna sementara
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' }
];

// Middleware untuk logging setiap permintaan
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Menampilkan daftar pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Menampilkan detail pengguna berdasarkan ID
app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Pengguna tidak ditemukan' });
  }
});

// Menambahkan pengguna baru
app.post('/users', express.json(), (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Menghapus pengguna berdasarkan ID
app.delete('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  users = users.filter(user => user.id !== userId);
  res.sendStatus(204);
});

// Mengubah nama pengguna berdasarkan ID
app.put('/users/:userId', express.json(), (req, res) => {
  const userId = parseInt(req.params.userId);
  const newName = req.body.name;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex].name = newName;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'Pengguna tidak ditemukan' });
  }
});

// Middleware untuk menangani kesalahan
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Terjadi kesalahan pada server' });
});

// Jalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
