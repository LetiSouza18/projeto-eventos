const { EntitySchema } = require('typeorm');

const PublicoAlvo = new EntitySchema({
  name: 'PublicoAlvo',
  tableName: 'publicos_alvo',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    descricao: {
      type: String,
    },
    grau_formacao: {
      type: String,
    },
  },
});

module.exports = { PublicoAlvo };
