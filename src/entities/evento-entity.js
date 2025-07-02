const { EntitySchema } = require('typeorm');

const Evento = new EntitySchema({
  name: 'Evento',
  tableName: 'eventos',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    idLocal: {
      type: String,
    },
    titulo: {
      type: String,
    },
    data_inicio: {
      type: Date,
    },
    data_fim: {
      type: Date,
    },
    descricao: {
      type: String,
    },
    valor: {
      type: String,
    },
    modalidade: {
      type: String,
    },
    link_inscricao: {
      type: String,
    },
    imagem_url: {
      type: String,
    },
    data_limite_inscricoes: {
      type: String,
    },
  },
});

module.exports = { Evento };
