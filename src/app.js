const express = require('express');
const authRouter = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');
const carrinhoRouter = require('./routes/carrinhoRoutes');
const permissaoRouter = require('./routes/permissaoRoutes');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', `${__dirname}/views`);

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    express.static(`${__dirname}/public/`),
  )
  .use(
    authRouter,
    permissaoRouter,
    produtoRoutes,
    usuarioRouter,
    carrinhoRouter,
  );

app.get('/', (req, res) => res.json('E-Commerce do Ramon'));

module.exports = app;
