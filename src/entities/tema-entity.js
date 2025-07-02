const { EntitySchema } = require('typeorm');

const Tema = new EntitySchema({
  name: 'Tema',
  tableName: 'temas',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
    },
  },
});

module.exports = { Tema };
