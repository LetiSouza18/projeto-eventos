const { EntitySchema } = require('typeorm');

const Atividade = new EntitySchema({
  name: 'Atividade',
  tableName: 'atividades',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    idEvento: {
      type: String,
    },
    nome: {
      type: String,
    },
    data: {
      type: Date,
    },
    descricao: {
      type: String,
    },
    horario_inicio: {
      type: String,
    },
    horario_fim: {
      type: String,
    },
    detalhe_local: {
      type: String,
    },
    idTipo: {
      type: String,
    },
    idInstituicao: {
      type: String,
    },
    idPublicoAlvo: {
      type: String,
    },
    idResponsavel: {
      type: String,
    },
  },
});

module.exports = { Atividade };
