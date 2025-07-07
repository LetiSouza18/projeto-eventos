const { AppDataSource } = require('../data-source');
const { Responsavel } = require('../entities/responsavel-entity');

module.exports = {
  async listarResponsaveis(_, res) {
    try {
      const repo = AppDataSource.getRepository(Responsavel);
      const responsaveis = await repo.find();
      res.json(responsaveis);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar responsáveis', error });
    }
  },
};
