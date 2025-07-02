const express = require('express');
const { AppDataSource } = require('./src/data-source');
const routesEventos = require('./src/routes/routes');


const app = express();
app.use(express.json());
app.use('/bd', routesEventos);

AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});

