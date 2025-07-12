const { EntitySchema } = require('typeorm');

const Responsavel = new EntitySchema({
  name: 'Responsavel',
  tableName: 'responsaveis',
  columns: {
    id: { type: 'int4', primary: true },
    telefone: { type: 'varchar', nullable: true },
    nome: { type: 'varchar', nullable: false },
    linkedin: { type: 'varchar', nullable: true },
    email: { type: 'varchar', nullable: true },
    lattes: { type: 'varchar', nullable: true },
    bio: { type: 'varchar', nullable: true },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'responsavel',
      nullable: true,
    },
    atividadesUnicas: {
      type: 'one-to-many',
      target: 'AtividadeUnica',
      inverseSide: 'responsavel',
      nullable: true,
    },
  }
});

module.exports = { Responsavel };
