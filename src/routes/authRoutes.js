const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const authRouter = Router();

authRouter
  .post('/auth/', AuthController.autenticar)
  .get('/auth/', AuthController.frontAutenticar);

module.exports = authRouter;
