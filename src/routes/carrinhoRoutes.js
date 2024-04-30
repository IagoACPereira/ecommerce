const { Router } = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
const validarToken = require('../middlewares/validarToken');

const carrinhoRouter = Router();

carrinhoRouter
  .post('/carrinho/', validarToken, CarrinhoController.adicionar)
  .get('/carrinho/', validarToken, CarrinhoController.exibir)
  .delete('/carrinho/', validarToken, CarrinhoController.deletar);

module.exports = carrinhoRouter;
