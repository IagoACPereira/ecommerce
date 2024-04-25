const { Router } = require('express');
const { body } = require('express-validator');

const ProdutoController = require('../controllers/ProdutoController');
const validarToken = require('../middlewares/validarToken');

const produtoRoutes = Router();

produtoRoutes
  .post(
    '/produtos/',
    validarToken,
    [
      body('nome').notEmpty().withMessage('Campo "Nome" é obrigatório.'),
      body('descricao').notEmpty().withMessage('Campo "Descrição" é obrigatório.'),
      body('preco').notEmpty().withMessage('Campo "Preço" é obrigatório.'),
      body('preco').isFloat().withMessage('Campo "Preço" deve receber um valor decimal.'),
      body('imagem').notEmpty().withMessage('Campo "Imagem" é obrigatório.'),
    ],
    ProdutoController.adicionar,
  )
  .get('/produtos/', ProdutoController.exibirTodos)
  .get('/produtos/:id', ProdutoController.exibirUm)
  .put(
    '/produtos/:id',
    validarToken,
    [
      body('nome').notEmpty().withMessage('Campo "Nome" é obrigatório.'),
      body('descricao').notEmpty().withMessage('Campo "Descrição" é obrigatório.'),
      body('preco').notEmpty().withMessage('Campo "Preço" é obrigatório.'),
      body('preco').isFloat().withMessage('Campo "Preço" deve receber um valor decimal.'),
    ],
    ProdutoController.atualizar,
  )
  .delete('/produtos/:id', validarToken, ProdutoController.deletar);

module.exports = produtoRoutes;
