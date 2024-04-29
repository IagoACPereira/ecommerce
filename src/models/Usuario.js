const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Usuario = sequelize.define('usuarios', {
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
  admin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

// Usuario.sync({ force: true });

module.exports = Usuario;
