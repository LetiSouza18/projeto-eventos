const { EntitySchema } = require('typeorm');

const Atividade = new EntitySchema({
  name: 'Atividade',
  tableName: 'atividades',
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String, nullable: false },
    data: { type: Date, nullable: true },
    descricao: { type: String, nullable: true },
    horario_inicio: { type: String, nullable: true },
    horario_fim: { type: String, nullable: true },
    detalhe_local: { type: String, nullable: true },
  },
  relations: {
    evento: {
      type: 'many-to-one',
      target: 'Evento',
      joinColumn: { name: 'idEvento' },
      nullable: false,
    },
    tipo: {
      type: 'many-to-one',
      target: 'Tipo',
      joinColumn: { name: 'idTipo' },
      nullable: true,
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
