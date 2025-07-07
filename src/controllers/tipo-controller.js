const { AppDataSource } = require('../data-source');
const { Tipo } = require('../entities/tipo-entity');

const repo = AppDataSource.getRepository(Tipo);

async function listarTipos(_, res) {
  try {
    const tipos = await repo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar tipos', error });
  }
}

  module.exports = {
    listarTipos,
};
