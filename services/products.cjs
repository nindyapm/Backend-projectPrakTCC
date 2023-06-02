const express = require('express');
const db = require('../config/Database.cjs');

const router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Terjadi kesalahan server' });
    } else {
      res.send(result);
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
      res.send(result);
    }
  });
});

router.post('/', (req, res) => {
    const { namaProduct, deskripsiProduct, hargaProduct, persediaan } = req.body;
    const sql = 'INSERT INTO products (namaProduct, deskripsiProduct, hargaProduct, persediaan) VALUES (?, ?, ?, ?)';
    db.query(sql, [namaProduct, deskripsiProduct, hargaProduct, persediaan], (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Terjadi kesalahan server' });
      } else {
        res.send({message: "Berhasil menambah product"});
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
        res.send({message: "Berhasil mengupdate product"});
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
        res.send({message: "Berhasil menghapus product"});
      }
    });
});

module.exports = router;