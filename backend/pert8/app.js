// app.js
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
const loanRoutes = require('./routes/loan');

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/loans', loanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
