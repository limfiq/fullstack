const express = require('express');
const app = express();
const studentRoute = require('./routes/studentRoute');

app.use(express.json());
app.use('/api', studentRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});