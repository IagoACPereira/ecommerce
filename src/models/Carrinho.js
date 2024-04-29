const sequelize = require('../config/conexaoDb');
const Produto = require('./Produto');
const Usuario = require('./Usuario');

const Carrinho = sequelize.define('carrinhos', {}, { timestamps: false });

Produto.hasMany(Carrinho);
Carrinho.belongsTo(Produto);
Usuario.hasMany(Carrinho);
Carrinho.belongsTo(Usuario);

// Carrinho.sync({ force: true });

module.exports = Carrinho;
