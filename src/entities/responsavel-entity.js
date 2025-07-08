const { EntitySchema } = require('typeorm');

const Responsavel = new EntitySchema({
  name: 'Responsavel',
  tableName: 'responsaveis',
  columns: {
    id: { type: String, primary: true },
    telefone: { type: String, nullable: true },
    nome: { type: String, nullable: false },
    linkedin: { type: String, nullable: true },
    email: { type: String, nullable: true },
    lattes: { type: String, nullable: true },
    bio: { type: String, nullable: true },
  },
});

module.exports = { Responsavel };
