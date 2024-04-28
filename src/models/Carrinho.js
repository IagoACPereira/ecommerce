const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Carrinho = sequelize.define('carrinhos', {
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { timestamps: false });

// Carrinho.sync({ force: true });

module.exports = Carrinho;
