const { AppDataSource } = require('../data-source');
const { AtividadeUnica } = require('../entities/atividade-unica-entity');

const atividadeUnicaRepository = AppDataSource.getRepository(AtividadeUnica);


async function criarAtividadeUnica(req, res) {
  const { eventoId } = req.params;
  const { temas: temasIds, ...dadosAtividadeUnica } = req.body;

  try {
    const evento = await AppDataSource.getRepository('Evento').findOneBy({ id: parseInt(eventoId) });

    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    const novaAtividadeUnica = atividadeUnicaRepository.create({
      ...dadosAtividadeUnica,
      evento,
    });

    if (Array.isArray(temasIds) && temasIds.length > 0) {
      const temas = await AppDataSource.getRepository('Tema').find({
        where: {
          id: In(temasIds)
        }
      });
      novaAtividadeUnica.temas = temas;
    }

    await atividadeUnicaRepository.save(novaAtividadeUnica);

    res.status(201).json(novaAtividadeUnica);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar atividade única' });
  }
}

async function listarAtividadesUnicas(_, res) {
  try {
    const atividadesUnicas = await atividadeUnicaRepository.find({
      relations: ['temas'],
    });
    res.json(atividadesUnicas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar atividades únicas' });
  }
}

async function atualizarAtividadeUnica(req, res) {
  const { id } = req.params;
  const { temas: temasIds, ...dadosAtualizacao } = req.body;

  try {
    const atividadeUnica = await atividadeUnicaRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['temas'],
    });

    if (!atividadeUnica) return res.status(404).json({ message: 'Atividade única não encontrada' });

    atividadeUnicaRepository.merge(atividadeUnica, dadosAtualizacao);

    if (Array.isArray(temasIds)) {
      const temas = await AppDataSource.getRepository('Tema').findByIds(temasIds);
      atividadeUnica.temas = temas;
    }

    const resultado = await atividadeUnicaRepository.save(atividadeUnica);
    res.json(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar atividade única' });
  }
}


async function deletarAtividadeUnica(req, res) {
  const { id } = req.params;

  try {
    const atividadeUnica = await atividadeUnicaRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['temas'],
    });

    if (!atividadeUnica) return res.status(404).json({ message: 'Atividade única não encontrada' });

    atividadeUnica.temas = [];
    await atividadeUnicaRepository.save(atividadeUnica);

    await atividadeUnicaRepository.delete(id);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar atividade única' });
  }
}

module.exports = {
  criarAtividadeUnica,
  listarAtividadesUnicas,
  atualizarAtividadeUnica,
  deletarAtividadeUnica,
};
