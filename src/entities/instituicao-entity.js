const { EntitySchema } = require('typeorm');

const Instituicao = new EntitySchema({
  name: 'Instituicao',
  tableName: 'instituicoes',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    descricao: {
      type: String,
    },
    nome: {
      type: String,
    },
    departamento: {
      type: Date,
    },
  },
});

module.exports = { Instituicao };
