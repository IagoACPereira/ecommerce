const { Router } = require('express');
const { body } = require('express-validator');
const UsuarioController = require('../controllers/UsuarioController');
const validarToken = require('../middlewares/validarToken');
const validarPermissoes = require('../middlewares/validarPermissoes');

const usuarioRouter = Router();

usuarioRouter
  .post('/usuarios/', [
    body('nome').notEmpty().withMessage('Campo "Nome" é obrigatório.'),
    body('email').notEmpty().withMessage('Campo "Email" é obrigatório.'),
    body('email').isEmail().withMessage('Campo "Email" é precisa ser um email válido.'),
    body('senha').notEmpty().withMessage('Campo "Senha" é obrigatório.'),
    body('senha').isStrongPassword().withMessage('Campo "Senha" precisa conter letras maiúsculas, caracteres especiais e números.'),
    body('permissaoId').notEmpty().withMessage('Campo "PermissaoId" é obrigatório.'),
    body('permissaoId').isInt().withMessage('Campo "PermissaoId" precisa ser um número inteiro.'),
  ], UsuarioController.adicionar)
  .get('/usuarios/', validarToken, validarPermissoes(['administrador']), UsuarioController.exibirTodos)
  .get('/usuarios/:id', validarToken, UsuarioController.exibirUm)
  .put('/usuarios/:id', validarToken, [
    body('nome').notEmpty().withMessage('Campo "Nome" é obrigatório.'),
    body('email').notEmpty().withMessage('Campo "Email" é obrigatório.'),
    body('email').isEmail().withMessage('Campo "Email" é precisa ser um email válido.'),
    body('senha').notEmpty().withMessage('Campo "Senha" é obrigatório.'),
    body('senha').isStrongPassword().withMessage('Campo "Senha" precisa conter letras maiúsculas, caracteres especiais e números.'),
    body('admin').notEmpty().withMessage('Campo "Admin" é obrigatório.'),
    body('admin').isInt().withMessage('Campo "Admin" precisa ser um número inteiro.'),
  ], UsuarioController.atualizar)
  .delete('/usuarios/:id', validarToken, UsuarioController.deletar);

module.exports = usuarioRouter;
