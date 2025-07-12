const { EntitySchema } = require('typeorm');

const AtividadeUnica = new EntitySchema({
  name: 'AtividadeUnica',
  tableName: 'atividades_unicas',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    horario_inicio: { type: 'time', nullable: true },
    horario_fim: { type: 'time', nullable: true },
    detalhe_local: { type: 'varchar', nullable: true },
    idEvento: { type: 'int4', nullable: false },
  },
  relations: {
    evento: {
      type: 'one-to-one',
      target: 'Evento',
      inverseSide: 'atividadeUnica',
      joinColumn: {
        name: 'idEvento',
        referencedColumnName: 'id',
      },
      nullable: false,
    },
    instituicao: {
      type: 'many-to-one',
      target: 'Instituicao',
      inverseSide: 'atividadesUnicas',
      joinColumn: { name: 'idInstituicao' },
      nullable: true,
    },
    publicoAlvo: {
      type: 'many-to-one',
      target: 'PublicoAlvo',
      inverseSide: 'atividadesUnicas',
      joinColumn: { name: 'idPublicoAlvo' },
      nullable: true,
    },
    responsavel: {
      type: 'many-to-one',
      target: 'Responsavel',
      inverseSide: 'atividadesUnicas',
      joinColumn: { name: 'idResponsavel' },
      nullable: true,
    },
    tipo: {
      type: 'many-to-one',
      target: 'Tipo',
      inverseSide: 'atividadesUnicas',
      joinColumn: { name: 'idTipo' },
      nullable: true,
    },
    temas: {
      type: 'many-to-many',
      target: 'Tema',
      inverseJoinColumn: {
        name: 'tema_id',
        referencedColumnName: 'id',
      },
      joinTable: {
        name: 'atividadeunica_tema',
        joinColumn: {
          name: 'atividadeunica_id',
          referencedColumnName: 'id',
        },
      },
      cascade: true,
      nullable: true,
    },
  },
});

module.exports = { AtividadeUnica };
