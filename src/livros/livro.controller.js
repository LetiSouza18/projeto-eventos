const { AppDataSource } = require('../data-source');
const { Livro } = require('./livro.entity');

const livroRepository = AppDataSource.getRepository('Livro');

async function criarLivro(req, res) {
  try {
    const novoLivro = livroRepository.create(req.body);
    await livroRepository.save(novoLivro);
    res.status(201).json(novoLivro);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar livro' });
  }
}

async function listarLivros(_, res) {
  const livros = await livroRepository.find();
  res.json(livros);
}

async function atualizarLivro(req, res) {
  const { id } = req.params;
  const livro = await livroRepository.findOneBy({ id: parseInt(id) });
  if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });

  livroRepository.merge(livro, req.body);
  const result = await livroRepository.save(livro);
  res.json(result);
}

async function deletarLivro(req, res) {
  const { id } = req.params;
  const result = await livroRepository.delete(id);
  if (result.affected === 0)
    return res.status(404).json({ message: 'Livro não encontrado' });

  res.status(204).send();
}

module.exports = {
  criarLivro,
  listarLivros,
  atualizarLivro,
  deletarLivro,
};
