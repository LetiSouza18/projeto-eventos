const { EntitySchema } = require('typeorm');

const Evento = new EntitySchema({
  name: 'Evento',
  tableName: 'eventos',
  columns: {
    id: { type: Number, primary: true, generated: true },
    titulo: { type: String, nullable: false },
    data_inicio: { type: Date, nullable: true },
    data_fim: { type: Date, nullable: true },
    descricao: { type: String, nullable: true },
    valor: { type: String, nullable: true },
    modalidade: { type: String, nullable: true },
    link_inscricao: { type: String, nullable: true },
    imagem_url: { type: String, nullable: true },
    data_limite_inscricoes: { type: Date, nullable: true },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'evento',
      cascade: true,
    },
    atividadesUnicas: {
      type: 'one-to-many',
      target: 'AtividadeUnica',
      inverseSide: 'evento',
      cascade: true,
    },
  },
});

module.exports = { Evento };
