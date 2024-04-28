const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Produto = require('./Produto');

const Carrinho = sequelize.define('carrinhos', {
  // usuarioId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // produtoId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
}, { timestamps: false });

Carrinho.hasMany(Produto);
Produto.belongsTo(Carrinho);

Carrinho.sync({ force: true });

module.exports = Carrinho;
