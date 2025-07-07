const { AppDataSource } = require('../data-source');
const { Tema } = require('../entities/tema-entity');

module.exports = {
  async listarTemas(_, res) {
    try {
      const repo = AppDataSource.getRepository(Tema);
      const temas = await repo.find();
      res.json(temas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar temas', error });
    }
  },
};
