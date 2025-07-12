const { EntitySchema } = require('typeorm');

const Evento = new EntitySchema({
  name: 'Evento',
  tableName: 'eventos',
  columns: {
    id: { type: 'int4', primary: true, generated: true },
    titulo: { type: 'varchar', nullable: false },
    data_inicio: { type: 'timestamp', nullable: true },
    data_fim: { type: 'timestamp', nullable: true },
    descricao: { type: 'varchar', nullable: true },
    valor: { type: 'varchar', nullable: true },
    modalidade: { type: 'varchar', nullable: true },
    link_inscricao: { type: 'varchar', nullable: true },
    imagem_url: { type: 'bytea', nullable: true },
    data_limite_inscricoes: { type: 'timestamp', nullable: true },
  },
  relations: {
    atividades: {
      type: 'one-to-many',
      target: 'Atividade',
      inverseSide: 'evento',
      cascade: true,
    },
    atividadeUnica: {
      type: 'one-to-one',
      target: 'AtividadeUnica',
      inverseSide: 'evento',
      cascade: true,
    },
    locais: {
      type: 'many-to-one',
      target: 'Local',
      inverseSide: 'eventos',
      cascade: true,
    },
  },
});

module.exports = { Evento };
