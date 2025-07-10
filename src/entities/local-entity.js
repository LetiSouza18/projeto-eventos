const { EntitySchema } = require('typeorm');

const Local = new EntitySchema({
  name: 'Local',
  tableName: 'locais',
  columns: {
    id: { type: Number, primary: true, generated: true },
    cep: { type: String, nullable: false },
    estado: { type: String, nullable: true },
    bairro: { type: String, nullable: true },
    numero: { type: String, nullable: true },
    rua: { type: String, nullable: true },
    cidade: { type: String, nullable: true },
    plataforma: { type: String, nullable: true },
  },
  relations: {
    evento: {
      type: 'many-to-one',
      target: 'Evento',
      nullable: true,
    },
  }
});

module.exports = { Local };
