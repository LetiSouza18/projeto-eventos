const { EntitySchema } = require('typeorm');

const Atividade = new EntitySchema({
  name: 'Atividade',
  tableName: 'atividades',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    nome: { type: 'varchar', nullable: false },
    data: { type: 'timestamp', nullable: true },
    descricao: { type: 'varchar', nullable: true },
    horario_inicio: { type: 'varchar', nullable: true },
    horario_fim: { type: 'varchar', nullable: true },
    detalhe_local: { type: 'varchar', nullable: true },
  },
  relations: {
    evento: {
      type: 'many-to-one',
      target: 'Evento',
      inverseSide: 'atividades',
      joinColumn: { name: 'idEvento' },
      nullable: false,
    },
    tipo: {
      type: 'many-to-one',
      target: 'Tipo',
      inverseSide: 'atividades',
      joinColumn: { name: 'idTipo' },
      nullable: true,
    },
    instituicao: {
      type: 'many-to-one',
      target: 'Instituicao',
      inverseSide: 'atividades',
      joinColumn: { name: 'idInstituicao' },
      nullable: true,
    },
    publicoAlvo: {
      type: 'many-to-one',
      target: 'PublicoAlvo',
      inverseSide: 'atividades',
      joinColumn: { name: 'idPublicoAlvo' },
      nullable: true,
    },
    responsavel: {
      type: 'many-to-one',
      target: 'Responsavel',
      inverseSide: 'atividades',
      joinColumn: { name: 'idResponsavel' },
      nullable: true,
    },
    temas: {
      type: 'many-to-many',
      target: 'Tema',
      joinTable: {
        name: 'atividade_tema',
        joinColumn: {
          name: 'atividade_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'tema_id',
          referencedColumnName: 'id',
        },
      },
      cascade: true,
      nullable: true,
    },
  },
});

module.exports = { Atividade };
