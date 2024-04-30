function validarPermissoes(perfisPermitidos) {
  return (req, res, next) => {
    try {
      console.log(perfisPermitidos);
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
