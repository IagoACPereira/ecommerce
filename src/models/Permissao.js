const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Permissao = sequelize.define('permissoes', {
  perfil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: false });

// Permissao.perfilsync({ force: true });

module.exports = Permissao;
