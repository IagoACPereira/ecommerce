const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Produto = sequelize.define('produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

// Produto.sync({ force: true });

module.exports = Produto;
