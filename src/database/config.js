const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: `${__dirname}/ecommerce.sqlite`,
// });

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
