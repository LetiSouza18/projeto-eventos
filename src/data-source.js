const { DataSource } = require('typeorm');
const { Livro } = require('./livros/livro.entity');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Livro],
});

module.exports = { AppDataSource };

