const { AppDataSource } = require('../data-source');
const { PublicoAlvo } = require('../entities/publico-alvo-entity');

module.exports = {
  async listarPublicosAlvo(_, res) {
    try {
      const repo = AppDataSource.getRepository(PublicoAlvo);
      const publicos = await repo.find();
      res.json(publicos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar públicos-alvo', error });
    }
  },
};
