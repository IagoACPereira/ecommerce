function validarPermissoes(perfilPermitido) {
  return (req, res, next) => {
    try {
      console.log(perfilPermitido);
      next();
    } catch (error) {
      res.status(401).json({
        mensagem: error.message,
        status: 401,
      });
    }
  };
}

module.exports = validarPermissoes;
