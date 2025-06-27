const express = require('express');
const { AppDataSource } = require('./src/data-source');
const livroRoutes = require('./src/livros/livro.routes');

const app = express();
app.use(express.json());
app.use('/livros', livroRoutes);

AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});

