const { AppDataSource } = require('../data-source');
const { Evento } = require('../entities/evento-entity');
const { Atividade } = require('../entities/atividade-entity');
const { AtividadeUnica } = require('../entities/atividade-unica-entity'); // Importar AtividadeUnica entity

const eventoRepository = AppDataSource.getRepository(Evento);
const atividadeRepository = AppDataSource.getRepository(Atividade);
const atividadeUnicaRepository = AppDataSource.getRepository(AtividadeUnica); // Obter o repositório para AtividadeUnica

async function criarEvento(req, res) {
  try {
    const novoEvento = eventoRepository.create(req.body);
    await eventoRepository.save(novoEvento);
    res.status(201).json(novoEvento);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar evento' });
  }
}

async function listarEventos(_, res) {
  try {
    const eventos = await eventoRepository.find({
      relations: {
        atividades: {
          temas: true, 
          tipo: true, 
          instituicao: true, 
          publicoAlvo: true, 
          responsavel: true, 
        },
        atividadesUnicas: {
          temas: true, 
          instituicao: true, 
          publicoAlvo: true, 
          responsavel: true, 
        },
      },
    });
    res.json(eventos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar eventos' });
  }
}

async function atualizarEvento(req, res) {
  const { id } = req.params;
  try {
    const evento = await eventoRepository.findOneBy({ id: parseInt(id) });
    if (!evento) return res.status(404).json({ message: 'Evento não encontrado' });

    eventoRepository.merge(evento, req.body);
    const resultado = await eventoRepository.save(evento);
    res.json(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar evento' });
  }
}

async function deletarEvento(req, res) {
  const { id } = req.params;

  try {
    const evento = await eventoRepository.findOne({
      where: { id: parseInt(id) },
      relations: ['atividades', 'atividadesUnicas'],
    });

    if (!evento) return res.status(404).json({ message: 'Evento não encontrado' });

    if (evento.atividades && evento.atividades.length > 0) {
      for (const atividade of evento.atividades) {
        await atividadeRepository.delete(atividade.id);
      }
    }
    if (evento.atividadesUnicas && evento.atividadesUnicas.length > 0) {
      for (const atividadeUnica of evento.atividadesUnicas) {
        await atividadeUnicaRepository.delete(atividadeUnica.id);
      }
    }

    await eventoRepository.delete(id);

    res.status(200).json({ message: 'Evento deletado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar evento' });
  }
}

module.exports = {
  criarEvento,
  listarEventos,
  atualizarEvento,
  deletarEvento,
};