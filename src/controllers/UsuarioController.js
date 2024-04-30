const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const Permissao = require('../models/Permissao');

class UsuarioController {
  static async adicionar(req, res) {
    const erroValidaReq = validationResult(req);
    const {
      nome,
      email,
      senha,
      permissaoId,
    } = req.body;
    try {
      if (!erroValidaReq.isEmpty()) {
        throw new Error('Erro ao validar requisição');
      }
      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: await bcrypt.hash(senha, 10),
        permissaoId,
      });
      res.status(200).json({
        mensagem: `Usuário ${novoUsuario.nome} cadastrado com sucesso.`,
        dados: novoUsuario,
        status: 200,
      });
    } catch (error) {
      if (error.message === 'Erro ao validar requisição') {
        res.status(400).json({
          mensagem: error.message,
          erros: erroValidaReq.array(),
          status: 400,
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

  static async exibirTodos(req, res) {
    try {
      const usuarios = await Usuario.findAndCountAll({
        attributes: ['id', 'nome', 'email'],
        include: {
          model: Permissao,
        },
      });
      if (usuarios.count === 0) {
        throw new Error('Não existem usuários cadastrado!');
      }
      res.status(200).json(usuarios);
    } catch (error) {
      if (error.message === 'Não existem usuários cadastrado!') {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
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

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findOne({
        where: { id },
        attributes: ['id', 'nome', 'email', 'permissaoId'],
      });
      if (!usuario) {
        throw new Error(`Não existe usuário com o id: ${id}`);
      }
      res.status(200).json(usuario);
    } catch (error) {
      if (error.message === `Não existe usuário com o id: ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro interno no servidor!',
          erro: error.message,
          status: 500,
        });
      }
    }
  }

  static async atualizar(req, res) {
    const erroValidaReq = validationResult(req);
    const { id } = req.params;
    const {
      nome,
      email,
      senha,
      permissaoId,
    } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { id } });
      if (!usuario) {
        throw new Error(`Não existe usuário com o id: ${id}`);
      }
      if (!erroValidaReq.isEmpty()) {
        throw new Error('Erro ao validar requisição');
      }
      await Usuario.update({
        nome,
        email,
        senha: await bcrypt.hash(senha, 10),
        permissaoId,
      }, { where: { id } });
      res.status(200).json({
        mensagem: 'Usuário atualizado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === 'Erro ao validar requisição') {
        res.status(400).json({
          mensagem: error.message,
          erros: erroValidaReq.array(),
          status: 400,
        });
      } else if (error.message === `Não existe usuário com o id: ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
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

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findOne({ where: { id } });
      if (!usuario) {
        throw new Error(`Não existe usuário com o id: ${id}`);
      }
      await Usuario.destroy({ where: { id } });
      res.status(200).json({
        mensagem: 'Usuário deletado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === `Não existe usuário com o id: ${id}`) {
        res.status(400).json({
          mensagem: error.message,
          status: 400,
        });
      } else {
        res.status(500).json({
          mensagem: 'Ocorreu um erro interno no servidor!',
          erro: error.message,
          status: 500,
        });
      }
    }
  }
}

module.exports = UsuarioController;
