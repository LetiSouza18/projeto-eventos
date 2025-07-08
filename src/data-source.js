const { DataSource } = require('typeorm');
const { Atividade, AtividadeUnica, Evento, Instituicao, Local, Tipo, Tema, PublicoAlvo, Responsavel } = require('./entities');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Atividade, AtividadeUnica, Evento, Instituicao, Local, Tipo, Tema, PublicoAlvo, Responsavel],
});

module.exports = { AppDataSource };

