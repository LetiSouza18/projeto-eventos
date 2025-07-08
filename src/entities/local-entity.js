const { EntitySchema } = require('typeorm');

const Local = new EntitySchema({
  name: 'Local',
  tableName: 'locais',
  columns: {
    id: { type: Number, primary: true, generated: true },
    cep: { type: String, nullable: true },
    estado: { type: String, nullable: true },
    bairro: { type: String, nullable: true },
    numero: { type: String, nullable: true },
    rua: { type: String, nullable: true },
    cidade: { type: String, nullable: true },
  },
  relations: {
    eventos: {
      type: 'one-to-one',
      target: 'Evento',
      inverseSide: 'locais',
      cascade: true,
    },
  },
});

module.exports = { Local };
