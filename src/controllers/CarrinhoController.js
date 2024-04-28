const Carrinho = require('../models/Carrinho');

class CarrinhoController {
  static async adicionar(req, res) {
    try {
      res.status(200).json({
        mensagem: 'Em testes',
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        mensagem: 'Ocorreu um erro interno no servidor',
        status: 500,
      });
    }
  }

  static async exibirTodos(req, res) {
    try {
      const carrinhos = await Carrinho.findAndCountAll();
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
        status: 500,
      });
    }
  }
}

module.exports = CarrinhoController;
