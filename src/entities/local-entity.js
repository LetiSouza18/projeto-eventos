const { EntitySchema } = require('typeorm');

const Local = new EntitySchema({
  name: 'Local',
  tableName: 'locais',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    cep: {
      type: String,
    },
    estado: {
      type: String,
    },
    bairro: {
      type: Date,
    },
    numero: {
      type: String,
    },
    rua: {
      type: String,
    },
    cidade: {
      type: String,
    },
    plataforma: {
      type: String,
    },
  },
});

module.exports = { Local };
