const express = require('express');
const app = express();

// Rute dengan beberapa penangan
app.get('/', (req, res, next) => {
  console.log('Penangan pertama');
  next();
}, (req, res) => {
  console.log('Penangan kedua');
  res.send('Hello World!');
});

// Rute dengan parameter rute
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`ID Pengguna: ${userId}`);
});

// Middleware penanganan kesalahan
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ada yang rusak!');
});

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
