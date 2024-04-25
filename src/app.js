const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRouter = require('./routes/usuarioRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

app.get('/', (req, res) => res.json('E-Commerce do Ramon'));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    express.static(`${__dirname}/public/`),
  )
  .use(
    produtoRoutes,
    usuarioRouter,
    authRouter,
  );

module.exports = app;
