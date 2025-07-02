const { EntitySchema } = require('typeorm');

const Tema = new EntitySchema({
  name: 'Tema',
  tableName: 'temas',
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String, nullable: false },
  },
  relations: {
    atividades: {
      type: 'many-to-many',
      target: 'Atividade',
      mappedBy: 'temas',
    },
    atividadesUnicas: {
      type: 'many-to-many',
      target: 'AtividadeUnica',
      mappedBy: 'temas',
    },
  },
});

module.exports = { Tema };
