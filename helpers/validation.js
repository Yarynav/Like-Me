const createPostValidation = (req, res) => {
  if (
    req.body.titulo.length === 0 ||
    req.body.url.length === 0 ||
    req.body.descripcion.length === 0
  ) {
    res
      .status(500)
      .json({ msj: 'Debe ingresar todos los campos del formulario' });
    return false;
  } else {
    return true;
  }
};

module.exports = {
  createPostValidation,
};
