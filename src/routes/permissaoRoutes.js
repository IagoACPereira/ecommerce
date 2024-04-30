const { Router } = require('express');
const PermissaoController = require('../controllers/PermissaoController');

const permissaoRouter = Router();

permissaoRouter
  .post('/permissoes/', PermissaoController.adicionar)
  .get('/permissoes/', PermissaoController.exibirTodos)
  .get('/permissoes/:id', PermissaoController.exibirUm)
  .put('/permissoes/:id', PermissaoController.atualizar)
  .delete('/permissoes/:id', PermissaoController.deletar);

module.exports = permissaoRouter;
