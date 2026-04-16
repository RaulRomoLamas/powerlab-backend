function validarMensaje(req, res, next) {
  const nombre = String(req.body.nombre ?? '').trim();
  const correo = String(req.body.correo ?? '').trim();
  const asunto = String(req.body.asunto ?? '').trim();
  const mensaje = String(req.body.mensaje ?? '').trim();

  if (!nombre || !correo || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoValido.test(correo)) {
    return res.status(400).json({ error: 'Formato de correo invalido' });
  }

  req.body.nombre = nombre;
  req.body.correo = correo;
  req.body.asunto = asunto;
  req.body.mensaje = mensaje;

  return next();
}

module.exports = validarMensaje;
