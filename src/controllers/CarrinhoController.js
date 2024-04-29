const Carrinho = require('../models/Carrinho');
const Produto = require('../models/Produto');
const Usuario = require('../models/Usuario');

class CarrinhoController {
  static async adicionar(req, res) {
    const { produtoId, usuarioId } = req.body;
    try {
      const novoItem = await Carrinho.create({
        produtoId,
        usuarioId,
      });
      res.status(200).json({
        mensagem: 'Novo produto adicionado ao carrinho',
        dados: novoItem,
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        erro: error.message,
        status: 500,
      });
    }
  }

  static async exibirTodos(req, res) {
    try {
      const carrinhos = await Carrinho.findAndCountAll({
        include: [
          {
            model: Produto,
          },
          {
            model: Usuario,
          },
        ],
      });
      res.status(200).json({
        mensagem: 'Em testes',
        carrinhos,
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        erro: error.message,
        status: 500,
      });
    }
  }

  static async exibirUm(req, res) {
    try {
      res.status(200).json({
        mensagem: 'Em testes',
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        erro: error.message,
        status: 500,
      });
    }
  }

  static async atualizar(req, res) {
    try {
      res.status(200).json({
        mensagem: 'Em testes',
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        erro: error.message,
        status: 500,
      });
    }
  }

  static async deletar(req, res) {
    try {
      res.status(200).json({
        mensagem: 'Em testes',
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        erro: error.message,
        status: 500,
      });
    }
  }
}

module.exports = CarrinhoController;
