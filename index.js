const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Port server

app.use(express.json());

// Mengimpor route untuk masing-masing service
const authRoute = require('./service/products');
// const barangRoute = require('./service/barang-service');

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Mengatur rute untuk masing-masing service
app.use('/api/products', authRoute);
// app.use('/barang', barangRoute);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});