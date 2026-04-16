function validarProducto(req, res, next) {
  const { nombre, precio, stock } = req.body;

  if (!nombre || String(nombre).trim() === '') {
    return res.status(400).json({ error: 'El nombre no puede estar vacio' });
  }

  if (Number(precio) <= 0 || Number.isNaN(Number(precio))) {
    return res.status(400).json({ error: 'El precio debe ser mayor a 0' });
  }

  if (Number(stock) < 0 || Number.isNaN(Number(stock))) {
    return res.status(400).json({ error: 'El stock no puede ser negativo' });
  }

  return next();
}

module.exports = validarProducto;
