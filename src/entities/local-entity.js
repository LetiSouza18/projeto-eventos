const { EntitySchema } = require('typeorm');

const Local = new EntitySchema({
  name: 'Local',
  tableName: 'locais',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    nome: { type: 'varchar', nullable: false},
    cep: { type: 'varchar', nullable: true },
    estado: { type: 'varchar', nullable: true },
    bairro: { type: 'varchar', nullable: true },
    numero: { type: 'varchar', nullable: true },
    rua: { type: 'varchar', nullable: true },
    cidade: { type: 'varchar', nullable: true },
    plataforma: { type: 'varchar', nullable: true },
  },
  relations: {
    eventos: {
      type: 'one-to-many',
      target: 'Evento',
      inverseSide: 'locais',
      nullable: true,
    },
  }
});

module.exports = { Local };
