const express = require('express');
const db = require('../config/Database');

const router = express.Router();

router.get('/list', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Terjadi kesalahan server' });
    } else {
      res.send({
        metadata: {
            code: 200,
            message: "OK"
        },
        total: result.length,
        data: result
      });
    }
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM products WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Terjadi kesalahan server' });
    } else {
      res.send({
        metadata: {
            code: 200,
            message: (result.length > 0) ? "OK" : "Products tidak ada"
        },
        data: {
          product: (result.length > 0) ? result[0] : null
        }
      });
    }
  });
});

router.post('/add', (req, res) => {
    const { namaProduct, deskripsiProduct, hargaProduct, persediaan } = req.body;
    const sql = 'INSERT INTO products (namaProduct, deskripsiProduct, hargaProduct, persediaan) VALUES (?, ?, ?, ?)';
    db.query(sql, [namaProduct, deskripsiProduct, hargaProduct, persediaan], (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Terjadi kesalahan server' });
      } else {
        res.send({
          metadata: {
              code: 200,
              message: "Berhasil menambah products"
          },
          data: {
            bahan: req.body
          }
        });
      }
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { namaProduct, deskripsiProduct, hargaProduct, persediaan } = req.body;
    const sql = 'UPDATE products SET namaProduct = ?, deskripsiProduct = ?, hargaProduct = ?, persediaan = ? WHERE id = ?';
    db.query(sql, [namaProduct, deskripsiProduct, hargaProduct, persediaan, id], (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Terjadi kesalahan server' });
      } else {
        res.send({
          metadata: {
              code: 200,
              message: "Berhasil mengupdate products"
          },
          data: {
            bahan: req.body
          }
        });
      }
    });
});
  
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Terjadi kesalahan server' });
      } else {
        res.send({
          metadata: {
              code: 200,
              message: "Berhasil menghapus products"
          }
        });
      }
    });
});

module.exports = router;