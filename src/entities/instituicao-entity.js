const { EntitySchema } = require('typeorm');

const Instituicao = new EntitySchema({
  name: 'Instituicao',
  tableName: 'instituicoes',
  columns: {
    id: { type: Number, primary: true, generated: true },
    descricao: { type: String, nullable: true },
    nome: { type: String, nullable: false },
    departamento: { type: String, nullable: true },
  },
});

module.exports = { Instituicao };
