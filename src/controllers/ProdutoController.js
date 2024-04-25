const { validationResult } = require('express-validator');
const Produto = require('../models/Produto');

class ProdutoController {
  static async adicionar(req, res) {
    const erroValidaReq = validationResult(req);
    const {
      nome,
      descricao,
      preco,
      imagem,
    } = req.body;
    try {
      if (!erroValidaReq.isEmpty()) {
        throw new Error('Erro ao validar requisição');
      }

      const novoProduto = await Produto.create({
        nome,
        descricao,
        preco,
        imagem,
      });

      res.status(201).json({
        mensagem: `O novo produto "${novoProduto.nome}" foi adicionado com sucesso.`,
        dados: novoProduto,
        status: 201,
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
          mensagem: 'Ocorreu um erro interno no servidor!',
          erro: error.message,
          status: 500,
        });
      }
    }
  }

  static async exibirTodos(req, res) {
    try {
      const todosProdutos = await Produto.findAndCountAll();
      if (todosProdutos.count === 0) {
        throw new Error('Não existem produtos cadastrado!');
      }
      res.status(200).json(todosProdutos);
      // res.render('produtos/produtos.ejs', { todosProdutos });
    } catch (error) {
      if (error.message === 'Não existem usuários cadastrado!') {
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

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        throw new Error(`Não existe produto com o id: ${id}`);
      }
      res.status(200).json(produto);
      // res.render('produtos/produto.ejs', { produto });
    } catch (error) {
      if (error.message === `Não existe produto com o id: ${id}`) {
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
      descricao,
      preco,
      imagem,
    } = req.body;
    try {
      if (!erroValidaReq.isEmpty()) {
        throw new Error('Erro ao validar requisição');
      }

      const produto = await Produto.findByPk(id);
      if (!produto) {
        throw new Error(`Não existe produto com o id: ${id}`);
      }

      await Produto.update({
        nome,
        descricao,
        preco,
        imagem,
      }, { where: { id } });

      res.status(200).json({
        mensagem: 'Produto atualizado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === 'Erro ao validar requisição') {
        res.status(400).json({
          mensagem: error.message,
          erros: erroValidaReq.array(),
          status: 400,
        });
      } else if (error.message === `Não existe produto com o id: ${id}`) {
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

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        throw new Error(`Não existe produto com o id: ${id}`);
      }

      await Produto.destroy({ where: { id } });

      res.status(200).json({
        mensagem: 'Produto deletado com sucesso.',
        status: 200,
      });
    } catch (error) {
      if (error.message === `Não existe produto com o id: ${id}`) {
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

module.exports = ProdutoController;
