const { EntitySchema } = require('typeorm');

const PublicoAlvo = new EntitySchema({
  name: 'PublicoAlvo',
  tableName: 'publicos_alvo',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    descricao: { type: 'varchar', nullable: false },
    grau_formacao: { type: 'varchar', nullable: true },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'publicoAlvo',
      nullable: true,
    },
    atividadesUnicas: {
      type: 'one-to-many',
      target: 'AtividadeUnica',
      inverseSide: 'publicoAlvo',
      nullable: true,
    },
  }
});

module.exports = { PublicoAlvo };
