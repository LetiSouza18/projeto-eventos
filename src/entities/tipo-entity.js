const { EntitySchema } = require('typeorm');

const Tipo = new EntitySchema({
  name: 'Tipo',
  tableName: 'tipos',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    nome: { type: 'varchar', nullable: false },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'tipo',
      nullable: true,
    },
    atividadesUnicas: {
      type: 'one-to-many',
      target: 'AtividadeUnica',
      inverseSide: 'tipo',
      nullable: true,
    },
  }
});

module.exports = { Tipo };
