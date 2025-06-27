const { EntitySchema } = require('typeorm');

const Livro = new EntitySchema({
  name: 'Livro',
  tableName: 'livros',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    titulo: {
      type: String,
    },
    autor: {
      type: String,
    },
    anoPublicacao: {
      type: Number,
    },
    genero: {
      type: String,
    },
  },
});

module.exports = { Livro };
