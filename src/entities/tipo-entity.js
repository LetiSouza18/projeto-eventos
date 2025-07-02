const { EntitySchema } = require('typeorm');

const Tipo = new EntitySchema({
  name: 'Tipo',
  tableName: 'tipos',
  columns: {
    id: { type: Number, primary: true, generated: true },
    nome: { type: String, nullable: false },
  },
});

module.exports = { Tipo };
