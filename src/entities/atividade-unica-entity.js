const { EntitySchema } = require('typeorm');

const AtividadeUnica = new EntitySchema({
  name: 'AtividadeUnica',
  tableName: 'atividades_unicas',
  columns: {
    horario_inicio: { type: String, nullable: true },
    horario_fim: { type: String, nullable: true },
    detalhe_local: { type: String, nullable: true },
  },
  relations: {
    evento: {
      type: 'one-to-one',
      target: 'Evento',
      joinColumn: { name: 'idEvento' },
      nullable: false,
      primary: true, 
      onDelete: 'CASCADE',
    },
    instituicao: {
      type: 'many-to-one',
      target: 'Instituicao',
      joinColumn: { name: 'idInstituicao' },
      nullable: true,
    },
    publicoAlvo: {
      type: 'many-to-one',
      target: 'PublicoAlvo',
      joinColumn: { name: 'idPublicoAlvo' },
      nullable: true,
    },
    responsavel: {
      type: 'many-to-one',
      target: 'Responsavel',
      joinColumn: { name: 'idResponsavel' },
      nullable: true,
    },
    tipo: {
      type: 'many-to-one',
      target: 'Tipo',
      joinColumn: { name: 'idTipo' },
      nullable: true,
    },
    temas: {
      type: 'many-to-many',
      target: 'Tema',
      joinTable: {
        name: 'atividadeunica_tema',
        joinColumn: {
          name: 'atividadeunica_id',
          referencedColumnName: 'idEvento', 
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

module.exports = { AtividadeUnica };