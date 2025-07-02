const { AppDataSource } = require('../data-source');
const { Atividade } = require('../entities/atividade-entity');

const atividadeRepository = AppDataSource.getRepository('Atividade');


async function criarAtividade(req, res) {
  try {
    const novaAtividade = atividadeRepository.create(req.body);
    await atividadeRepository.save(novaAtividade);
    res.status(201).json(novaAtividade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar atividade' });
  }
}

async function listarAtividades(_, res) {
  const atividades = await atividadeRepository.find();
  res.json(atividades);
}

async function atualizarAtividade(req, res) {
  const { id } = req.params;
  const atividade = await atividadeRepository.findOneBy({ id: parseInt(id) });
  if (!atividade) return res.status(404).json({ message: 'Atividade não encontrada' });

  atividadeRepository.merge(atividade, req.body);
  const result = await atividadeRepository.save(atividade);
  res.json(result);
}

async function deletarAtividade(req, res) {
  const { id } = req.params;
  const result = await atividadeRepository.delete(id);
  if (result.affected === 0)
    return res.status(404).json({ message: 'Atividade não encontrada' });

  res.status(204).send();
}

module.exports = {
  criarAtividade,
  listarAtividades,
  atualizarAtividade,
  deletarAtividade,
};
