const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

class AuthController {
  static async autenticar(req, res) {
    const { email, senha } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        throw new Error('Usuário inválido.');
      }
      const compararSenhas = await bcrypt.compare(senha, usuario.senha);
      if (!compararSenhas) {
        throw new Error('Senha inválida.');
      }
      const token = jwt.sign({
        nome: usuario.nome,
        email: usuario.email,
        admin: usuario.admin,
      }, process.env.SEGREDO, {
        algorithm: 'HS512',
        expiresIn: 60 * 60,
      });
      res.status(200).json({
        mensagem: 'Usuário autenticado com sucesso.',
        token,
        status: 200,
      });
      // res.render('autenticar/autenticar.ejs', { token });
    } catch (error) {
      if (error.message === 'Usuário inválido.') {
        res.status(401).json({
          mensagem: error.message,
          status: 401,
        });
      } else if (error.message === 'Senha inválida.') {
        res.status(401).json({
          mensagem: error.message,
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

  static frontAutenticar(req, res) {
    res.render('autenticar/login.ejs');
  }
}

module.exports = AuthController;
