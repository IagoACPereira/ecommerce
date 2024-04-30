const Permissao = require('../models/Permissao');

class PermissaoController {
  static async adicionar(req, res) {
    const { perfil } = req.body;
    try {
      const novaPermissao = await Permissao.create({
        perfil,
      });
      res.status(201).json({
        mensagem: 'Permissão adicionada com sucesso',
        dados: novaPermissao,
        status: 201,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async exibirTodos(req, res) {
    try {
      const permissoes = await Permissao.findAndCountAll();
      res.status(200).json(permissoes);
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const permissao = await Permissao.findOne({
        where: { id },
      });
      res.status(200).json(permissao);
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async atualizar(req, res) {
    const { id } = req.params;
    const { perfil } = req.body;
    try {
      await Permissao.update({ perfil }, {
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Permissão atualizada com sucesso',
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      await Permissao.destroy({
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Permissão deletada com sucesso',
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

module.exports = PermissaoController;
