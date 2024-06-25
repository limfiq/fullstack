const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Menggunakan route
app.use('/api/users', userRoutes);

// Route yang membutuhkan autentikasi
app.get('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
