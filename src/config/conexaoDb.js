const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('ecommerce', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${__dirname}/ecommerce.sqlite`,
});

async function conexaoDb() {
  await sequelize.authenticate();
  // eslint-disable-next-line no-console
  console.log('A conexão foi estabelecida com sucesso.');
}

conexaoDb();

module.exports = sequelize;
