const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

function conexaoDb() {
  try {
    sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('A conexão foi estabelecida com sucesso.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Não foi possível conectar ao banco de dados.');
  }
}
conexaoDb();

module.exports = sequelize;
