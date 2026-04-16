const express = require('express');
const connection = require('../db');
const validarMensaje = require('../middlewares/validarMensaje');

const router = express.Router();

router.post('/', validarMensaje, (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  const sql = 'INSERT INTO mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)';

  connection.query(sql, [nombre, correo, asunto, mensaje], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({ message: 'Mensaje guardado' });
  });
});

module.exports = router;
