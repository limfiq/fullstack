// app.js

const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan router yang telah ditetapkan
app.use('/api', routes);

// Menjalankan server pada port 3000
app.listen(3000, () => {
    console.log('Server berjalan pada port 3000');
});
