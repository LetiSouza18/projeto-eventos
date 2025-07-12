const { EntitySchema } = require('typeorm');

const Instituicao = new EntitySchema({
  name: 'Instituicao',
  tableName: 'instituicoes',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    descricao: { type: 'varchar', nullable: true },
    nome: { type: 'varchar', nullable: false },
    departamento: { type: 'varchar', nullable: true },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'instituicao',
      nullable: true,
    },
    atividadesUnicas: {
      type: 'one-to-many',
      target: 'AtividadeUnica',
      inverseSide: 'instituicao',
      nullable: true,
    },
  }
});

module.exports = { Instituicao };
