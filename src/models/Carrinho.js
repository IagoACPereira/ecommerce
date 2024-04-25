const sequelize = require('../database/config');

const Carrinho = sequelize.define('carrinho', {}, { timestamps: false });

// Carrinho.sync({ force: true });

module.exports = Carrinho;
