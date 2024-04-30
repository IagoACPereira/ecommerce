const sequelize = require('../config/conexaoDb');
const Produto = require('./Produto');
const Usuario = require('./Usuario');

const Carrinho = sequelize.define('carrinho', {}, {
  timestamps: false,
  freezeTableName: true,
});

Usuario.hasMany(Carrinho, {
  foreignKey: 'usuarioId',
});
Carrinho.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
});
Produto.hasMany(Carrinho, {
  foreignKey: 'produtoId',
});
Carrinho.belongsTo(Produto, {
  foreignKey: 'produtoId',
});

// Carrinho.sync({ force: true });

module.exports = Carrinho;
