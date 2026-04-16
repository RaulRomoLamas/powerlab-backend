const express = require('express');
const connection = require('../db');
const validarProducto = require('../middlewares/validarProducto');

const router = express.Router();

router.get('/', (_req, res, next) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      return next(err);
    }
    return res.json(results);
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  connection.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) {
      return next(err);
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.json(results[0]);
  });
});

router.post('/', validarProducto, (req, res, next) => {
  const {
    nombre,
    categoria,
    marca,
    precio,
    stock,
    imagen,
    descripcion,
    disponible
  } = req.body;

  const query = `
    INSERT INTO productos
    (nombre, categoria, marca, precio, stock, imagen, descripcion, disponible)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nombre,
    categoria,
    marca,
    Number(precio),
    Number(stock),
    imagen,
    descripcion,
    Boolean(disponible)
  ];

  connection.query(query, values, (err, result) => {
    if (err) {
      return next(err);
    }

    return res.status(201).json({
      id: result.insertId,
      nombre,
      categoria,
      marca,
      precio: Number(precio),
      stock: Number(stock),
      imagen,
      descripcion,
      disponible: Boolean(disponible)
    });
  });
});

module.exports = router;
