const { AppDataSource } = require('../data-source');
const { Instituicao } = require('../entities/instituicao-entity');

module.exports = {
  async listarInstituicoes(_, res) {
    try {
      const repo = AppDataSource.getRepository(Instituicao);
      const instituicoes = await repo.find();
      res.json(instituicoes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar instituições', error });
    }
  },
};
