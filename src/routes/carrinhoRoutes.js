const { Router } = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');

const carrinhoRouter = Router();

carrinhoRouter
  .post('/carrinho/', CarrinhoController.adicionar)
  .get('/carrinho/', CarrinhoController.exibir)
  .delete('/carrinho/', CarrinhoController.deletar);

module.exports = carrinhoRouter;
