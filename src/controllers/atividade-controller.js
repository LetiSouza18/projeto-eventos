const { AppDataSource } = require('../data-source');
const { Responsavel, Instituicao, PublicoAlvo, Evento, Tipo, Atividade, Tema } = require('../entities');
const { In } = require('typeorm'); 

const atividadeRepository = AppDataSource.getRepository(Atividade);

async function criarAtividade(req, res) {
  const { eventoId } = req.params;
  const { temas: temasIds, ...dadosAtividade } = req.body;

  try {
    const evento = await AppDataSource.getRepository(Evento).findOneBy({ id: parseInt(eventoId) });
    const tipo = await AppDataSource.getRepository(Tipo).findOneBy({ id: dadosAtividade.idTipo });
    const responsavel = await AppDataSource.getRepository(Responsavel).findOneBy({ id: dadosAtividade.idResponsavel });
    const instituicao = await AppDataSource.getRepository(Instituicao).findOneBy({ id: dadosAtividade.idInstituicao });
    const publicoAlvo = await AppDataSource.getRepository(PublicoAlvo).findOneBy({ id: dadosAtividade.idPublicoAlvo });

    if (!evento) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    const novaAtividade = atividadeRepository.create({
      data: dadosAtividade.data,
      descricao: dadosAtividade.descricao,
      detalhe_local: dadosAtividade.detalhe_local,
      horario_fim: dadosAtividade.horario_fim,
      horario_inicio: dadosAtividade.horario_inicio,
      nome: dadosAtividade.nome,
      evento,
      tipo,
      responsavel,
      instituicao,
      publicoAlvo,
      temas: [],
    });

    if (Array.isArray(temasIds) && temasIds.length > 0) {
      const temas = await AppDataSource.getRepository(Tema).find({
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

async function listarAtividadesPorEvento(req, res) {
  const { eventoId } = req.params;
  try {
    const atividades = await atividadeRepository.find({
      where: {
        evento: { id: parseInt(eventoId) }
      },
      relations: ['temas'],
    });
    res.json(atividades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar atividades do evento' });
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
  listarAtividadesPorEvento, 
  atualizarAtividade,
  deletarAtividade,
};
