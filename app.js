const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const animalRoutes = require('./routes/animals');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rute dasar
app.get('/', (req, res) => {
  res.send('Welcome to the Zooper Zooper!'); // Tampilkan pesan selamat datang
});

// Rute untuk CRUD data hewan
app.use('/animals', animalRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
