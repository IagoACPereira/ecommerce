const jwt = require('jsonwebtoken');

function validarToken(req, res, next) {
  const token = req.headers.authorization;
  try {
    // jwt.verify(token, process.env.SEGREDO);
    next();
  } catch (error) {
    if (error.message === 'jwt malformed') {
      res.status(401).json({
        mensagem: 'Token mau formatado.',
        status: 401,
      });
    } else if (error.message === 'jwt must be provided') {
      res.status(401).json({
        mensagem: 'É necessário um token.',
        status: 401,
      });
    } else if (error.message === 'jwt expired') {
      res.status(401).json({
        mensagem: 'Token expirou.',
        status: 401,
      });
    } else if (error.message === 'invalid token') {
      res.status(401).json({
        mensagem: 'Token inválido.',
        status: 401,
      });
    } else {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor.',
        erro: error.message,
        status: 500,
      });
    }
  }
}

module.exports = validarToken;
