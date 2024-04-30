const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Permissao = require('./Permissao');

const Usuario = sequelize.define('usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Permissao.hasMany(Usuario, {
  foreignKey: 'permissaoId',
});
Usuario.belongsTo(Permissao, {
  foreignKey: 'permissaoId',
});

// Usuario.sync({ force: true });

module.exports = Usuario;
