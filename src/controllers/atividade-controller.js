const { AppDataSource } = require('../data-source');
const { Atividade } = require('../entities/atividade-entity');

const atividadeRepository = AppDataSource.getRepository('Atividade');

async function criarAtividade(req, res) {
  const { temas: temasIds, ...dadosAtividade } = req.body;

  try {
    const novaAtividade = atividadeRepository.create(dadosAtividade);

    if (Array.isArray(temasIds) && temasIds.length > 0) {
      const temas = await AppDataSource.getRepository('Tema').find({
        where: {
          id: In(temasIds)
        }
      });
      novaAtividade.temas = temas;
    }

    await atividadeRepository.save(novaAtividade);

    res.status(201).json(novaAtividade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar atividade' });
  }
}


async function listarAtividades(_, res) {
  try {
    const atividades = await atividadeRepository.find({
      relations: ['temas'], 
    });
    res.json(atividades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar atividades' });
  }
}

async function atualizarAtividade(req, res) {
  const { id } = req.params;
  const { temas: temasIds, ...dadosAtualizacao } = req.body;

  try {
    const atividade = await atividadeRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['temas'],
    });

    if (!atividade) return res.status(404).json({ message: 'Atividade não encontrada' });

    atividadeRepository.merge(atividade, dadosAtualizacao);

    if (Array.isArray(temasIds)) {
      const temas = await AppDataSource.getRepository('Tema').find({
        where: {
          id: In(temasIds)
        }
      });
      
      atividade.temas = temas;
    }

    const resultado = await atividadeRepository.save(atividade);
    res.json(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar atividade' });
  }
}

async function deletarAtividade(req, res) {
  const { id } = req.params;

  try {
    const atividade = await atividadeRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['temas'],
    });

    if (!atividade) return res.status(404).json({ message: 'Atividade não encontrada' });

    atividade.temas = [];
    await atividadeRepository.save(atividade);

    await atividadeRepository.delete(id);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar atividade' });
  }
}

module.exports = {
  criarAtividade,
  listarAtividades,
  atualizarAtividade,
  deletarAtividade,
};
