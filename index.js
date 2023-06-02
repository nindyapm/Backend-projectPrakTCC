const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Mengimpor route untuk service
const authRoute = require('./services/products.cjs');

app.get('/', (req, res) => {
  res.send('Server Berjalan');
});

app.use('/products', authRoute);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});