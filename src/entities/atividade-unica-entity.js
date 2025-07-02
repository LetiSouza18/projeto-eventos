const { EntitySchema } = require('typeorm');

const AtividadeUnica = new EntitySchema({
  name: 'AtividadeUnica',
  tableName: 'atividades_unicas',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    idEvento: {
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

module.exports = { AtividadeUnica };
