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

  static async exibir(req, res) {
    const queries = req.query;
    try {
      const itensCarrinho = await Carrinho.findAll({
        where: queries,
        include: [
          {
            model: Usuario,
            attributes: ['id', 'nome', 'email'],
          },
          {
            model: Produto,
          },
        ],
      });

      if (!itensCarrinho[0]) {
        throw new Error('Não há intens no carrinho');
      }

      const quantidade = itensCarrinho.length;
      let valorTotal = 0;

      itensCarrinho.map((item) => {
        valorTotal += item.produto.preco;
        return 0;
      });

      res.status(200).json({
        quantidade,
        valorTotal,
        itensCarrinho,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async deletar(req, res) {
    const { usuarioId, produtoId } = req.query;
    try {
      if (!usuarioId) {
        throw new Error('O ID do usuário é obrigatório');
      }

      if (!produtoId) {
        throw new Error('O ID do produto é obrigatório');
      }

      await Carrinho.destroy({
        where: {
          usuarioId,
          produtoId,
        },
      });

      res.status(200).json({
        mensagem: 'Em testes',
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }
}

module.exports = CarrinhoController;
