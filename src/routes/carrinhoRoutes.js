const { Router } = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');

const carrinhoRouter = Router();

carrinhoRouter
  .post('/carrinho/', CarrinhoController.adicionar)
  .get('/carrinho/', CarrinhoController.exibirTodos)
  .get('/carrinho/:id', CarrinhoController.exibirUm)
  .put('/carrinho/:id', CarrinhoController.atualizar)
  .delete('/carrinho/:id', CarrinhoController.deletar);

module.exports = carrinhoRouter;
