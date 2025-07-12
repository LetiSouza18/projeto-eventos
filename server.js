const express = require('express');
const cors = require('cors');
const { AppDataSource } = require('./src/data-source');
const routesEventos = require('./src/routes/routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());
app.use('/api', routesEventos);

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('CORS configurado para: http://localhost:5173');
  });
});