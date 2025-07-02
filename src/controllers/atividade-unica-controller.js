const { AppDataSource } = require('../data-source');
const { AtividadeUnica } = require('../entities/atividade-unica-entity');

const atividadeUnicaRepository = AppDataSource.getRepository('AtividadeUnica');


async function criarAtividadeUnica(req, res) {
  try {
    const novaAtividade = atividadeUnicaRepository.create(req.body);
    await atividadeUnicaRepository.save(novaAtividade);
    res.status(201).json(novaAtividade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar atividade' });
  }
}

async function listarAtividadesUnicas(_, res) {
  const atividades = await atividadeUnicaRepository.find();
  res.json(atividades);
}

async function atualizarAtividadeUnica(req, res) {
  const { id } = req.params;
  const atividade = await atividadeUnicaRepository.findOneBy({ id: parseInt(id) });
  if (!atividade) return res.status(404).json({ message: 'Atividade não encontrada' });

  atividadeUnicaRepository.merge(atividade, req.body);
  const result = await atividadeUnicaRepository.save(atividade);
  res.json(result);
}

async function deletarAtividadeUnica(req, res) {
  const { id } = req.params;
  const result = await atividadeUnicaRepository.delete(id);
  if (result.affected === 0)
    return res.status(404).json({ message: 'Atividade não encontrada' });

  res.status(204).send();
}

module.exports = {
  criarAtividadeUnica,
  listarAtividadesUnicas,
  atualizarAtividadeUnica,
  deletarAtividadeUnica,
};
