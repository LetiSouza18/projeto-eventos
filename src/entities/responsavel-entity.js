const { EntitySchema } = require('typeorm');

const Responsavel = new EntitySchema({
  name: 'Responsavel',
  tableName: 'responsaveis',
  columns: {
    cpf: {
      type: Number,
      primary: true,
      generated: true,
    },
    telefone: {
      type: String,
    },
    nome: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    email: {
      type: String,
    },
    lattes: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
});

module.exports = { Responsavel };
