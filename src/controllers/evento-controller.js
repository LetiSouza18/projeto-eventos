const { AppDataSource } = require('../data-source');
const { Evento } = require('../entities/evento-entity');
const { Atividade } = require('../entities/atividade-entity');

const eventoRepository = AppDataSource.getRepository('Evento');
const atividadeRepository = AppDataSource.getRepository('Atividade');

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
      relations: ['atividades'], 
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
      relations: ['atividades'],
    });

    if (!evento) return res.status(404).json({ message: 'Evento não encontrado' });

    if (evento.atividades && evento.atividades.length > 0) {
      for (const atividade of evento.atividades) {
        await atividadeRepository.delete(atividade.id);
      }
    }

    await eventoRepository.delete(id);

    res.status(204).send();
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
