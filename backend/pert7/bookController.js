
// Daftar buku sementara
let books = [
    { id: 1, title: 'Percy Jackson & the Olympians: The Lightning Thief', author: 'Rick Riordan' },
    { id: 2, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien' }
];

// Fungsi untuk menampilkan semua buku
exports.getAllBooks = (req, res) => {
    res.json(books);
};

// Fungsi untuk menambahkan buku baru
exports.createBook = (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
};

// Fungsi untuk menampilkan detail buku berdasarkan ID
exports.getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Buku tidak ditemukan' });
    }
};

// Fungsi untuk mengupdate buku berdasarkan ID
exports.updateBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === bookId);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    } else {
        res.status(404).json({ error: 'Buku tidak ditemukan' });
    }
};

// Fungsi untuk menghapus buku berdasarkan ID
exports.deleteBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    books = books.filter(book => book.id !== bookId);
    res.sendStatus(204);
};
