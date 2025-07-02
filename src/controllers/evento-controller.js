const { AppDataSource } = require('../data-source');
const { Livro } = require('./livro.entity');

const eventoRepository = AppDataSource.getRepository('Evento');


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
  const eventos = await eventoRepository.find();
  res.json(eventos);
}

async function atualizarEvento(req, res) {
  const { id } = req.params;
  const evento = await eventoRepository.findOneBy({ id: parseInt(id) });
  if (!evento) return res.status(404).json({ message: 'Evento não encontrado' });

  eventoRepository.merge(evento, req.body);
  const result = await eventoRepository.save(evento);
  res.json(result);
}

async function deletarEvento(req, res) {
  const { id } = req.params;
  const result = await eventoRepository.delete(id);
  if (result.affected === 0)
    return res.status(404).json({ message: 'Evento não encontrado' });

  res.status(204).send();
}

module.exports = {
  criarEvento,
  listarEventos,
  atualizarEvento,
  deletarEvento,
};
