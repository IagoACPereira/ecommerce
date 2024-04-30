const sequelize = require('../config/conexaoDb');
const Produto = require('./Produto');
const Usuario = require('./Usuario');

const Carrinho = sequelize.define('carrinhos', {}, { timestamps: false });

Usuario.hasMany(Carrinho);
Carrinho.belongsTo(Usuario);
Produto.hasMany(Carrinho);
Carrinho.belongsTo(Produto);

// Carrinho.sync({ force: true });

module.exports = Carrinho;
